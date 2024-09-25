'use client'

import { useState } from "react";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod"

import authService from "@/services/authService";

import {
    Form,
    FormField,
    FormLabel,
    FormItem,
    FormControl,
    FormMessage
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';

import { useForm } from "react-hook-form";
import { Spinner } from "@/components/spinner";

import { toast, Toaster } from "sonner"

interface LoginFormProps {
    userId: string
}

const formSchema = z.object({
    username: z.string(),
    senha: z.string()
})

export const LoginForm = ({ userId }: LoginFormProps) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const handleSubmit = async (formParams: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        const res = await authService.getLoginParams(formParams)
        if (res.status === 200) {
            console.log(userId)
            router.push(`/${res.data.user_id}/home`)
        } else {
            toast.error('Usuário ou senha inválidos')
        }
        setIsLoading(false)
    }
    return (
        <>
            <Toaster />
            <div className="w-96 bg-white rounded-lg p-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <div className='flex flex-col gap-y-5'>

                            <FormField control={form.control} name='username' render={({ field }) => {
                                return <FormItem>
                                    <div className='flex flex-col gap-y-1'>
                                        <FormLabel className="text-light-green">Usuário</FormLabel>
                                        <FormControl>
                                            <Input placeholder="pedrosilva" type="text" {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <FormField control={form.control} name='senha' render={({ field }) => {
                                return <FormItem>
                                    <div className='flex flex-col gap-y-1'>
                                        <FormLabel className="text-light-green">Senha</FormLabel>
                                        <FormControl>
                                            <Input placeholder="********" type="password" {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <div className='mx-auto'>
                                <Button className='w-56 mx-auto mt-2' type="submit" variant="green">{isLoading ? <Spinner /> : "Enviar"}</Button>
                                <p className='text-xs pt-1'>Não possui uma conta? <span onClick={() => router.push('/account')} className='text-light-green hover:underline hover:cursor-pointer'>Cadastre-se</span></p>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}
