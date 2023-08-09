import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import Sign from "@/components/Sign";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex flex-col items-center justify-center my-24 mx-auto gap-4">
      <Sign providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
