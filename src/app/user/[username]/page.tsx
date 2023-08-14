import UserPost from "@/components/UserPost";
import UserProfile from "@/components/UserProfile";
import { getUserForProfileBy } from "@/service/user";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    username: string;
  };
};

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUserForProfileBy(username);

  if (!user.name) {
    notFound();
  }

  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPost user={user} />
    </section>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUserForProfileBy(username);

  return {
    title: `${user?.name} (@${user?.username}) • Instagram Photos`,
    description: `${user?.name}'s all Instagram posts`,
  };
}
