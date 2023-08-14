"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import { signIn, signOut, useSession } from "next-auth/react";
import SignButton from "./ui/SignButton";
import Avatar from "./Avatar";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
    title: "Home",
    label: "Home",
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
    title: "Search",
    label: "Search user",
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
    title: "New",
    label: "New post",
  },
];

export default function Footer() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  let isSigninButton = session ? (
    <SignButton type="Signout" onClick={() => signOut()} />
  ) : (
    <SignButton type="Signin" onClick={() => signIn()} />
  );
  return (
    <footer className="w-full sticky bottom-0 inline-block md:hidden bg-white border-t border-neutral-300">
      <ul className="py-1 px-4 flex justify-around items-center">
        {menu.map(({ href, icon, clickedIcon }) => (
          <li key={href}>
            <Link href={href}>{pathName === href ? clickedIcon : icon}</Link>
          </li>
        ))}

        {user && (
          <li className="rounded-md p-2 flex justify-center ">
            <Link href={`/user/${user.username}`}>
              <div className="flex items-center">
                <Avatar image={user.image} />
                <p className="ml-4 hidden lg:inline">Profile</p>
              </div>
            </Link>
          </li>
        )}
        {isSigninButton}
      </ul>
    </footer>
  );
}
