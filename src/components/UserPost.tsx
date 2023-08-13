import { ProfileUser } from "@/model/user";

type Props = {
  user: ProfileUser;
};
export default function UserPost({ user }: Props) {
  return <p>User Post</p>;
}
