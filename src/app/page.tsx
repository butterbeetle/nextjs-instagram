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
    <section className="w-full max-w-[850px] p-4 mx-auto">
      <div className="w-full min-w-0">
        <FollowList />
        <PostList />
      </div>
    </section>
  );
}
