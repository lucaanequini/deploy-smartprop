'use client'

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import authService from "@/services/authService";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const pathname = usePathname(); // Hook para detectar o caminho atual da rota

    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;

    useEffect(() => {
        if (token !== null) {
            checkAuthToken();
        } else {
            router.push('/login');
        }
    }, [pathname]);

    const checkAuthToken = async () => {
        if (token) {
            try {
                const res = await authService.checkToken(token);
                if (res.error || res === false) {
                    console.log("Token is invalid");
                    router.push("/login");
                }
            } catch (error) {
                console.error("Error checking token:", error);
                router.push("/login");
            }
        } else {
            router.push("/login");
        }
    };

    return (
        <section>
            {children}
        </section>
    );
}
