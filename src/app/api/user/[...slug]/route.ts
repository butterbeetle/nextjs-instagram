import { getLikedPotsOf, getPostsOf, getSavedPostsOf } from "@/service/posts";
import { searchUsers } from "@/service/user";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    slug: string[];
  };
};
export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;

  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new Response("Bad Request", { status: 400 });
  }

  const [username, selected] = slug;

  let request = getPostsOf;
  if (selected === "saved") {
    request = getSavedPostsOf;
  } else if (selected === "liked") {
    request = getLikedPotsOf;
  }

  return request(username) //
    .then((data) => NextResponse.json(data));
}
