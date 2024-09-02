"use client";

import React from "react";
import "@/styles/globals.css";
import RecoilRootProvider from "./recoilRootProvider";
import { Navigation } from "@/components/navigation/Navigation";
import { Header } from "@/components/header/Header";

// export const metadata: Metadata = {
// 	title: 'Create Next App',
// 	description: 'Generated by create next app',
// }

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className="bg-neutral-900 text-white">
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
            </body>
        </html>
    );
}
