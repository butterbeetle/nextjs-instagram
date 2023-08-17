"use client";
import { ProfileUser } from "@/model/user";
import Button from "./Button";
import useMe from "@/hooks/me";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

type Props = {
  user: ProfileUser;
};
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedUser, toggleFollow } = useMe();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isUpdating = isPending || isFetching;

  const showButton = loggedUser && loggedUser.username !== username;
  const following =
    loggedUser &&
    loggedUser.following.find((item) => item.username === username);

  const text = following ? "팔로잉" : "팔로우";

  const handleFollow = async () => {
    setIsFetching(true);
    await toggleFollow(user.id, !following);
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <div className="relative">
      {showButton && (
        <div>
          {isUpdating && (
            <div className="absolute z-20 inset-0 flex justify-center items-center">
              <PulseLoader size={6} />
            </div>
          )}
          <Button
            disabled={isUpdating}
            text={text}
            onClick={handleFollow}
            gray={text === "팔로잉"}
          />
        </div>
      )}
    </div>
  );
}
