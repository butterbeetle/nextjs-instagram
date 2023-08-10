"use client";
import useSWR from "swr";

export default function PostList() {
  const { data, isLoading, error } = useSWR("/api/posts");
  console.log(data);
  return <p>Post List</p>;
}
