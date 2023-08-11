"use client";
import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostListCard from "./PostListCard";
import PuffSpinner from "./ui/PuffSpinner";

export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");

  return (
    <section>
      {isLoading && (
        <div className="mt-32 flex justify-center">
          <PuffSpinner />
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
