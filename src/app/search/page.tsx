import UserSearch from "@/components/UserSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serach User",
  description: "Search users to follow",
};

export default function SearchPage() {
  return <UserSearch />;
}
