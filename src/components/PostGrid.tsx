import useSWR from "swr";
import PuffSpinner from "./ui/PuffSpinner";
import { SimplePost } from "@/model/post";
import PostGridCard from "./PostGridCard";
type Props = {
  username: string;
  selected: string;
};
export default function PostGrid({ username, selected }: Props) {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/user/${username}/${selected}`);

  return (
    <div className="w-full text-center">
      {isLoading && <PuffSpinner />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}