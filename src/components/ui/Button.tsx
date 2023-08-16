type Props = {
  text: string;
  onClick: () => void;
  gray: boolean;
};
export default function Button({ text, onClick, gray }: Props) {
  return (
    <button
      className={`border-none py-2 px-4 rounded-md 
   text-white text-sm font-bold leading-4 ${
     gray ? "bg-gray-100 hover:bg-gray-200" : "bg-sky-500 hover:bg-blue-500"
   }`}
    >
      <p className={`${gray ? "text-black" : "text-white"}`}>{text}</p>
    </button>
  );
}
