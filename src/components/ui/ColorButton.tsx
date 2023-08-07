type Props = {
  text: string;
  onClick: () => void;
};
export default function ColorButton({ text, onClick }: Props) {
  return (
    <div
      className="rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500
    to-amber-300 p-[0.15rem] text-center"
    >
      <button
        className="bg-white rounded-sm text-base sm:text-sm p-[0.3rem] hover:opacity-90 transition-opacity"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
