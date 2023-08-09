type Props = {
  params: {
    username: string;
  };
};
export default function UserPage({ params: { username } }: Props) {
  return <p>{username}</p>;
}
