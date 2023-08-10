"use client";

import useSWR from "swr";

export default function FollowList() {
  const { data, error, isLoading } = useSWR("/api/me");
  console.log(data, isLoading);
  return <p>Follow List</p>;
}
