"use client";

import React, { useEffect } from "react";
import RecoilRootProvider from "../recoilRootProvider";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation/Navigation";
import { Header } from "@/components/header/Header";

export default function BasicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, status } = useSession();
    const router = useRouter();

    // 로그인되지 않은 경우 로그인 페이지로 리디렉션
    useEffect(() => {
        if (status === "unauthenticated") {
            signIn();
        }
    }, [status]);

    // 로딩 중
    if (status === "loading") {
        return <p>Loading...</p>;
    }

    // 로그인된 경우
    return (
        <RecoilRootProvider>
            <section className="flex h-screen">
                <Navigation />
                <section className="flex flex-grow flex-col">
                    <Header />
                    <main className="flex-grow overflow-auto p-8">
                        {children}
                    </main>
                </section>
            </section>
        </RecoilRootProvider>
    );
}
