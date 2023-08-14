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
    <div>
      {isLoading && <PuffSpinner />}
      <ul>
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
