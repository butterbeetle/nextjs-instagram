"use client";
import { ProfileUser } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";

type Props = {
  user: ProfileUser;
};
export default function UserPost({ user: { username } }: Props) {
  const [selected, setSelected] = useState("posts");
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/user/${username}/${selected}`);

  console.log(posts);

  return <p>User Post</p>;
}
