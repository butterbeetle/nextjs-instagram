"use client";
import { SimplePost } from "@/model/post";
import Image from "next/image";
import { CircleLoader } from "react-spinners";
import useSWR from "swr";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  console.log(posts);
  return (
    <section>
      {isLoading && (
        <div>
          <CircleLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li className="mb-4" key={post.id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
