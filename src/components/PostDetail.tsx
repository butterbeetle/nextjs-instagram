import { FullPost, SimplePost } from "@/model/post";
import useSWR from "swr";

type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, username, userImage, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;
  console.log(comments);
  return <p>aa</p>;
}
