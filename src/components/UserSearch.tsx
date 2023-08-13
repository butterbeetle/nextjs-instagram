"use client";
import { SearchUser } from "@/model/user";
import useSWR from "swr";
import Avatar from "./Avatar";
import { FormEvent, useState } from "react";
import Link from "next/link";
import SearchIcon from "./ui/icons/SearchIcon";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${keyword}`);
  console.log(users);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-2xl my-4 mx-auto flex flex-col items-center ">
      <form className="w-full p-2 mb-4" onSubmit={onSubmit}>
        <input
          className="w-full py-2 px-4 outline-none border border-neutral-200"
          type="text"
          placeholder="Search"
          autoFocus
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      <ul className="w-full px-2">
        {users &&
          users.map(({ username, name, image, following, followers }) => (
            <Link key={username} href={`/user/${username}`}>
              <li className="w-full flex mb-2 p-2 border border-neutral-100 hover:bg-gray-100 rounded-md">
                <Avatar image={image} size="md" />
                <div className="w-full flex justify-between items-center">
                  <div className="flex flex-col justify-center items-start ml-2">
                    <p className="font-bold text-sm">{username}</p>
                    <p className="text-gray-500 text-sm">{name}</p>
                    <p className="text-gray-500 text-xs">{`${following} following ${followers} followers`}</p>
                  </div>
                  <button className="border py-1 px-4 rounded-lg bg-sky-500 text-white text-sm ">
                    follow
                  </button>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </section>
  );
}
