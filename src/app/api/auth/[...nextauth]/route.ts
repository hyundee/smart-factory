import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/auth/options";

export const { GET, POST } = NextAuth(authOptions);
