"use client";

import { DetailUser } from "@/model/user";
import Link from "next/link";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import ScrollBar from "./ui/ScrollBar";

export default function FollowList() {
  const { data, error, isLoading } = useSWR<DetailUser>("/api/me");
  const myFollowing = data?.following;

  return (
    // <section
    //   className="relative z-0  flex justify-center items-center p-4
    // shadow-md shadow-neutral-400 mb-4 rounded-2xl min-h-[90px] overflow-x-auto "
    // >
    <section
      className="relative z-0 w-full flex items-center justify-center p-4
    shadow-md rounded-2xl min-h-[120px] overflow-hidden shadow-neutral-500 
    select-none bg-white
    "
    >
      {isLoading ? (
        <FadeLoader color="red" />
      ) : (
        (!myFollowing || myFollowing.length === 0) && (
          <p>{`You don't have following`}</p>
        )
      )}
      {myFollowing && myFollowing.length > 0 && (
        <ScrollBar>
          {myFollowing.map(({ username, image }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avatar image={image} size="md" highlight />
              <p className="w-full text-sm text-ellipsis overflow-hidden text-center">
                {username}
              </p>
            </Link>
          ))}
        </ScrollBar>
      )}
    </section>
  );
}
