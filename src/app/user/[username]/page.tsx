import UserPost from "@/components/UserPost";
import UserProfile from "@/components/UserProfile";
import { getUserForProfileBy } from "@/service/user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = {
  params: {
    username: string;
  };
};

const getUser = cache(async (username: string) =>
  getUserForProfileBy(username)
);
export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

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
  const user = await getUser(username);

  return {
    title: `${user?.name} (@${user?.username}) • Instagram Photos`,
    description: `${user?.name}'s all Instagram posts`,
  };
}
