import { PagesOptions } from "next-auth";

declare module "next-auth" {
  interface NextAuthOptions {
    app: Partial<PagesOptions> | undefined;
  }
}
