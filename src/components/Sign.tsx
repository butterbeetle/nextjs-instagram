"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Sign({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div key={name}>
          <ColorButton
            text={`Sign In with ${name}`}
            onClick={() => signIn(id, { callbackUrl })}
          />
        </div>
      ))}
    </>
  );
}
