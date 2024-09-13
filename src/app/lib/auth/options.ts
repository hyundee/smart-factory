import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                // 로그인 양식을 정의
                username: {
                    label: "이메일",
                    type: "text",
                    placeholder: "이메일 주소 입력 요망",
                },
                password: { label: "비밀번호", type: "password" },
            },
            async authorize(credentials, req): Promise<any> {
                try {
                    const res = await fetch(
                        `${process.env.NEXTAUTH_URL}/api/login`,
                        {
                            method: "POST",
                            body: JSON.stringify(credentials),
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                    const user = await res.json();

                    // user가 있으면 user리턴 없으면 null리턴
                    return user || null;
                } catch (e: any) {
                    throw new Error(e.response);
                }
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
    },
    secret: process.env.NEXTAUTH_SECRET, // NextAuth.js의 시크릿 키
};
