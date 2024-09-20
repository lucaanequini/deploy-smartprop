'use client'

import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex flex-col gap-y-5 items-center justify-center">
            <div>
                <img src="/logo.png" alt="Logo" className="w-20 h-13" />
            </div>
            <LoginForm />
        </div>
    )
}