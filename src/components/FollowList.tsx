"use client";

import { DetailUser } from "@/model/user";
import Link from "next/link";
import { FadeLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";

export default function FollowList() {
  const { data, error, isLoading } = useSWR<DetailUser>("/api/me");
  const myFollowing = data?.following;

  const dummy = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  return (
    <section
      className="relative z-0  flex justify-center items-center p-4 
    shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto "
    >
      {isLoading ? (
        <FadeLoader color="red" />
      ) : (
        (!myFollowing || myFollowing.length === 0) && (
          <p>{`You don't have following`}</p>
        )
      )}
      {myFollowing && myFollowing.length > 0 && (
        <ul className="flex">
          {dummy.map(({ username, image }) => (
            <li key={username}>
              <Link
                className="flex flex-col items-center w-20"
                href={`/user/${username}`}
              >
                <Avatar image={image} size="md" highlight />
                <p className="w-full text-sm text-ellipsis overflow-hidden text-center">
                  {username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
