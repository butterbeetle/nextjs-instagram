import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

type Props = { image?: string | null };
export default function Avatar({ image }: Props) {
  const pathName = usePathname();
  const { data: session } = useSession();
  const username = session?.user.username;

  return (
    <div
      className={`w-7 h-7 flex rounded-full justify-center items-center border ${
        username === pathName.split("/").at(-1)
          ? "border-black border-[2.5px]"
          : "border-gray-400 border-[2.5px]"
      } `}
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="rounded-full object-cover"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
