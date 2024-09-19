import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                // 로그인 양식을 정의
                username: { label: "이메일", type: "text" },
                password: { label: "비밀번호", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(credentials),
                    }
                );

                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt", // 세션 대신 JWT 사용
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: "/login", // 로그인 페이지의 경로
    },
    secret: process.env.NEXTAUTH_SECRET, // NextAuth.js의 시크릿 키
};
