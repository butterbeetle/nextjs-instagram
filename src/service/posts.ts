import { client } from "./sanity";

export async function getFollowingPostsOf(username: string) {
  return client.fetch(
    `*[_type == "post" && username == "${username}" 
    || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
    | order(_createdAt desc)
    `
  );
}
