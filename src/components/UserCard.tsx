import { SearchUser } from "@/model/user";
import Avatar from "./Avatar";
import Link from "next/link";
import FollowButton from "./ui/FollowButton";

type Props = {
  user: SearchUser;
};
export default function UserCard({
  user: { username, name, image, following, followers },
}: Props) {
  return (
    <Link href={`/user/${username}`}>
      <div className="w-full flex mb-2 p-2 border bg-white border-neutral-100 hover:bg-gray-100 rounded-md">
        <Avatar image={image} size="md" />
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col justify-center items-start ml-2">
            <p className="font-bold text-sm">{username}</p>
            <p className="text-gray-500 text-sm">{name}</p>
            <p className="text-gray-500 text-xs">{`${following} following ${followers} followers`}</p>
          </div>
          <FollowButton />
        </div>
      </div>
    </Link>
  );
}