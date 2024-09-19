import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/firebase/firebase";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
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
                        const token = await user.getIdToken();
                        return { id: user.uid, email: user.email, token }; // 사용자 정보와 토큰 반환
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
                token.accessToken = user.token; // Firebase JWT 토큰 저장
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                uid: token.uid,
                email: token.email,
                accessToken: token.accessToken, // Firebase 토큰 추가
            };
            return session;
        },
    },
    pages: {
        signIn: "/login", // 로그인 페이지 경로
    },
    secret: process.env.NEXTAUTH_SECRET, // NextAuth.js의 시크릿 키
});

export { handler as GET, handler as POST };
