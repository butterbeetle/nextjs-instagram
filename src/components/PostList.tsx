"use client";
import { SimplePost } from "@/model/post";
import Image from "next/image";
import useSWR from "swr";

export default function PostList() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/posts");
  console.log(posts);
  return (
    <section>
      <ul>{posts && posts.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>
    </section>
  );
}
