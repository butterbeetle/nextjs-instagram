"use client";
import { DetailUser, ProfileUser } from "@/model/user";
import useSWR from "swr";
import Button from "./Button";

type Props = {
  user: ProfileUser;
};
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data: loggedUser } = useSWR<DetailUser>("/api/me");

  const showButton = loggedUser && loggedUser.username !== username;
  const following =
    loggedUser &&
    loggedUser.following.find((item) => item.username === username);

  const text = following ? "팔로잉" : "팔로우";

  return (
    <>
      {showButton && (
        <Button text={text} onClick={() => {}} gray={text === "팔로잉"} />
      )}
    </>
  );
}
