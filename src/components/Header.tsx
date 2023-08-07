"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import InstagramIcon from "./ui/icons/InstagramIcon";
import ColorButton from "./ui/ColorButton";

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

export default function Header() {
  const pathName = usePathname();
  return (
    <header className=" bg-white border-r border-neutral-300 p-6 h-full hidden md:inline-block md:w-[100px] lg:w-[270px]">
      <Link href={"/"}>
        <div className="mb-16">
          <InstagramIcon className="lg:hidden" />
          <h1 className="text-xl font-bold hidden lg:inline">Instagram</h1>
        </div>
      </Link>
      <ul className="flex flex-col gap-4">
        {menu.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <div className="flex items-center">
                {pathName === item.href ? item.clickedIcon : item.icon}
                <p className="ml-4 hidden lg:inline">{item.title}</p>
              </div>
            </Link>
          </li>
        ))}
        <ColorButton text="Sign in" onClick={() => {}} />
      </ul>
    </header>
  );
}
