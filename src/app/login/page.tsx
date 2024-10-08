"use client";

import React, { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false, // 로그인 후 리디렉션 제어
        });

        if (result?.ok) {
            router.back();
        } else {
            console.error("로그인 실패:", result?.error);
        }
    };

    return (
        <div>
            <h1>로그인페이지</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="이메일"
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    required
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}
