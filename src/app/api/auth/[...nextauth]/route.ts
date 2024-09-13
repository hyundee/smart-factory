import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     async redirect({ url, baseUrl }) {
    //         // 로그인 후 리디렉션할 페이지 (예: /dashboard 또는 /basic)
    //         return "/basic"; // or '/dashboard'
    //     },
    //     async session({ session, token }) {
    //         // 세션에 추가 정보 넣기 (예시)
    //         if (token) {
    //             session.user.id = token.sub;
    //         }
    //         return session;
    //     },
    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.sub = user.id;
    //         }
    //         return token;
    //     },
    // },
});

export { handler as GET, handler as POST };
