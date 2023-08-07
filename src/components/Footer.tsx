"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
    title: "홈",
    label: "Home",
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
    title: "검색",
    label: "Search user",
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
    title: "만들기",
    label: "New post",
  },
];
export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className="w-full sticky bottom-0 inline-block md:hidden bg-white border-t border-neutral-300">
      <ul className="py-4 px-16 flex justify-around">
        {menu.map(({ href, icon, clickedIcon }) => (
          <li key={href}>
            <Link href={href}>{pathName === href ? clickedIcon : icon}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
