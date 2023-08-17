"use client";
import { ProfileUser } from "@/model/user";
import Button from "./Button";
import useMe from "@/hooks/me";

type Props = {
  user: ProfileUser;
};
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedUser } = useMe();

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
