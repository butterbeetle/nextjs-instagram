export type AuthUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<AuthUser, "username" | "image">;

export type HomeUser = {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
} & AuthUser;

export type SearchUser = {
  following: number;
  followers: number;
} & AuthUser;

export type ProfileUser = {
  posts: number;
} & SearchUser;
