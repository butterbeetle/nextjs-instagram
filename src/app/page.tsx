import FollowList from "@/components/FollowList";
import PostList from "@/components/PostList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <section className="w-full flex  ">
      <div className="mx-auto ">
        <FollowList />
        <PostList />
      </div>
    </section>
  );
}
