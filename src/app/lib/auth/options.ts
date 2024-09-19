import { firebaseAuth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                // 로그인 양식을 정의
                email: { label: "이메일", type: "text" },
                password: { label: "비밀번호", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                try {
                    const userCredential = await signInWithEmailAndPassword(
                        firebaseAuth,
                        credentials.email,
                        credentials.password
                    );
                    const user = userCredential.user;

                    if (user) {
                        // Firebase에서 JWT 토큰 생성
                        const token = await user.getIdToken();
                        return { id: user.uid, email: user.email, token };
                    }

                    return null;
                } catch (error) {
                    throw new Error("Invalid email or password");
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.uid = user.id;
                token.email = user.email;
                token.accessToken = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                uid: token.uid,
                email: token.email,
                accessToken: token.accessToken,
            };
            return session;
        },
    },
    pages: {
        signIn: "/login", // 로그인 페이지의 경로
    },
    secret: process.env.NEXTAUTH_SECRET, // NextAuth.js의 시크릿 키
};
