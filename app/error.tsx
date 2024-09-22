'use client'

import { Button } from "@/components/ui/button";

const Error = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <p className="text-4xl font-bold">Algo deu errado!</p>
            <Button variant='green'>Voltar</Button>
        </div>
    )
}

export default Error;