import { SearchUser } from "@/model/user";
import { client } from "./sanity";
import user from "../../sanity-studio/schemas/user";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export function createUser({ id, email, name, username, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    name,
    email,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks": bookmarks[]->_id
    }
    `
  );
}

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}*") || (username match "${keyword}*")`
    : "";
  return client
    .fetch(
      `*[_type == "user" ${query}]{
      ...,
      "following": count(following),
      "followers": count(followers),
    }
    `
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.following ?? 0,
      }))
    );
}

export async function getUserForProfileBy(username: string) {
  return client
    .fetch(
      `*[_type == "user" && username == "${username}"][0]{
    ...,
    "id":_id,
    "following": count(following),
    "followers": count(followers),
    "posts":count(*[_type == "post" && author->username == "${username}"])
  }
  `
    )
    .then((user) => ({
      ...user,
      following: user?.following ?? 0,
      followers: user?.followers ?? 0,
      posts: user?.posts ?? 0,
    }));
}

export async function addBookmarkPost(postId: string, userId: string) {
  return client
    .patch(userId) //
    .setIfMissing({ bookmarks: [] })
    .append("bookmarks", [
      {
        _ref: postId,
        _type: "reference",
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
}

export async function delBookmarkPost(postId: string, userId: string) {
  return client
    .patch(userId) //
    .unset([`bookmarks[_ref=="${postId}"]`])
    .commit();
}
