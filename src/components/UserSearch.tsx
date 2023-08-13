"use client";
import { SearchUser } from "@/model/user";
import useSWR from "swr";
import Avatar from "./Avatar";
import { FormEvent, useState } from "react";
import Link from "next/link";
import SearchIcon from "./ui/icons/SearchIcon";
import PuffSpinner from "./ui/PuffSpinner";
import UserCard from "./UserCard";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${keyword}`);

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
      {error && <p className="mt-4 text-xl">Something went wrong...</p>}
      {isLoading && (
        <div className="mt-16">
          <PuffSpinner />
        </div>
      )}
      {!isLoading && !error && users?.length === 0 && (
        <p className="mt-4 text-xl ">This user does not exist...</p>
      )}
      <ul className="w-full px-2">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
