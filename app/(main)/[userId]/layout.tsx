'use client'

import { useEffect, useState, useCallback } from "react"

import { useRouter } from "next/navigation"

import authService from "@/services/authService";

import { Spinner } from "@/components/spinner";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;

    useEffect(() => {
        if (token !== null) {
            checkAuthToken()
        } else {
            router.push('/login')
        }
    }, [])

    const checkAuthToken = useCallback(async () => {
        if (token) {
            try {
                const res = await authService.checkToken(token);
                if (res.error || res === false) {
                    router.push("/login");
                }
            } catch (error) {
                console.error("Error checking token:", error);
                router.push("/login");
            }
        } else {
            router.push("/login");
        }
        setLoading(false);
    }, [router, token]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Spinner />
            </div>
        )
    }

    return (
        <section>
            {children}
        </section>
    );
}