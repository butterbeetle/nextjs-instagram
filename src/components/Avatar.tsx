type AvatarSize = "sm" | "md";

type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "sm",
  highlight = false,
}: Props) {
  return (
    <div className={`${getContainerSizeStyle(size, highlight)} `}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={`${getImageSizeStyle(size)}`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

const getContainerSizeStyle = (
  size: AvatarSize,
  highlight: boolean
): string => {
  const baseStyle = "rounded-full flex shrink-0 justify-center items-center";
  const { container } = getSizeStyleBy(size);
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";

  return `${baseStyle} ${highlightStyle} ${container}`;
};

const getImageSizeStyle = (size: AvatarSize): string => {
  const baseStyle = "bg-white object-cover rounded-full p-[0.1rem] ";
  const { image } = getSizeStyleBy(size);

  return `${baseStyle} ${image}`;
};

type ImageSizeStyle = {
  container: string;
  image: string;
};

const getSizeStyleBy = (size: AvatarSize): ImageSizeStyle => {
  switch (size) {
    case "sm":
      return {
        container: "w-7 h-7",
        image: "w-[30px] h-[30px] p-[0.1rem]",
      };
    case "md":
      return {
        container: "w-14 h-14",
        image: "w-[52px] h-[52px] p-[0.1rem]",
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
};
