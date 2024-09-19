"use client";

import React, { useEffect } from "react";
import RecoilRootProvider from "../recoilRootProvider";
import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation/Navigation";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header/Header";

export default function BasicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    console.log(status);

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
