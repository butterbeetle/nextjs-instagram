import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
  params: {
    username: string;
  };
};
export default async function UserPage({ params: { username } }: Props) {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return <p>{username}</p>;
}
