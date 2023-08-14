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
    <section>
      <ul>
        {tabs.map(({ type, icon }) => (
          <li key={type} onClick={() => setSelected(type)}>
            <button>{icon}</button>
            <span>{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} selected={selected} />
    </section>
  );
}
