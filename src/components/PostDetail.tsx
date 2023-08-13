"use client";

import { FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import useSWR from "swr";
import PostUserAvatar from "./PostUserAvatar";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import Avatar from "./Avatar";

type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, username, userImage, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <section className="flex w-full h-full ">
      <div className="relative basis-3/5 hidden md:inline-block">
        <Image
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="w-full md:basis-2/5 flex flex-col">
        <PostUserAvatar image={userImage} username={username} />
        <Image
          className="border-y md:hidden md:border-none h-auto w-full"
          src={image}
          alt={`photo by ${username}`}
          priority
          sizes="100vw"
          width={0}
          height={0}
        />
        <ul className="border-t border-gray-200 h-full overflow-y-auto p-4 mb-1 hidden md:inline-block">
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li className="flex items-center mb-1" key={index}>
                  <Avatar
                    image={image}
                    size="sm"
                    highlight={commentUsername === username}
                  />
                  <div>
                    <span className="font-bold mr-1">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
        <div className="hidden md:inline-block">
          <CommentForm />
        </div>
      </div>
    </section>
  );
}
