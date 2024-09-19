import "next-auth";

declare module "next-auth" {
    interface User {
        uid?: string; // Firebase 사용자 ID
        token?: string; // Firebase JWT 토큰
    }

    interface Session {
        user: {
            uid?: string;
            email?: string;
            accessToken?: string;
        } & DefaultSession["user"];
    }

    interface JWT {
        uid?: string;
        email?: string;
        accessToken?: string;
    }
}
