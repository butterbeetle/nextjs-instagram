"use client";
import { AuthUser } from "@/model/user";
import PostUserAvatar from "./PostUserAvatar";
import FilesIcon from "./ui/icons/FilesIcon";
import Button from "./ui/Button";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

type Props = {
  user: AuthUser;
};
export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState<boolean>(false);
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    if (e.type === "dragenter") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return (
    <section className="w-full max-w-xl flex flex-col items-center mt-6 mx-auto">
      <PostUserAvatar username={username} image={image ?? ""} />
      <form className="w-full flex flex-col mt-2">
        <input
          className="hidden"
          name="input"
          id="input-upload"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <label
          className={`w-full h-60 flex flex-col items-center justify-center
          ${!file && "border-4 border-sky-500 border-dashed"}`}
          htmlFor="input-upload"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {dragging && (
            <div className="absolute inset-0 z-10 bg-sky-500/20 pointer-events-none" />
          )}
          {!file && (
            <div className="flex flex-col items-center pointer-events-none">
              <FilesIcon />
              <p>Drag and Drop your image here or click</p>
            </div>
          )}
          {file && (
            <div className="relative w-full  aspect-square">
              <Image
                className="object-cover"
                src={URL.createObjectURL(file)}
                alt="local file"
                sizes="650px"
                fill
              />
            </div>
          )}
        </label>
        <textarea
          className="resize-none text-lg border border-neutral-300 outline-none"
          name="text"
          id="input-text"
          rows={10}
          placeholder={"내용을 입력해주세요."}
          required
        ></textarea>
        <Button text="Publish" onClick={() => {}} />
      </form>
    </section>
  );
}
