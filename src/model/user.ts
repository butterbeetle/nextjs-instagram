export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<User, "username" | "image">;

export type DetailUser = {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
} & User;

export type SearchUser = {
  following: number;
  followers: number;
} & User;

export type ProfileUser = {
  posts: number;
} & SearchUser;
