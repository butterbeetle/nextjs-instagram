"use client";
import { ProfileUser } from "@/model/user";
import { useState } from "react";
import PostIcon from "./ui/icons/PostIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostGrid from "./PostGrid";

type Props = {
  user: ProfileUser;
};
const tabs = [
  { type: "posts", icon: <PostIcon /> },
  { type: "saved", icon: <BookmarkIcon /> },
  { type: "liked", icon: <HeartIcon /> },
];
export default function UserPost({ user: { username } }: Props) {
  const [selected, setSelected] = useState(tabs[0].type);

  return (
    <section className="max-w-4xl mx-auto md:border-t md:mt-12">
      <ul className="flex justify-center uppercase ">
        {tabs.map(({ type, icon }) => (
          <li
            className={`flex justify-center mt-[-1px] basis-1/3 cursor-pointer py-2 border-black ${
              type === selected && "font-bold border-t"
            } md:items-center`}
            key={type}
            onClick={() => setSelected(type)}
          >
            <button className="scale-60 md:scale-75">{icon}</button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} selected={selected} />
    </section>
  );
}
