'use client'

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

import { useState } from "react";

import { toast, Toaster } from "sonner"

import { Spinner } from "@/components/spinner";

import "jsuites"

import "jsuites/dist/jsuites.css"

const formSchema = z.object({
    nome: z.string(),
    sobrenome: z.string(),
    cpf: z.string(),
    email: z.string(),
    telefone: z.string(),
    cep: z.string(),
    senha: z.string(),
    validateSenha: z.string(),
    username: z.string()
})

export const AccountForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: '',
            sobrenome: '',
            cpf: '',
            email: '',
            telefone: '',
            cep: '',
            senha: '',
            validateSenha: '',
            username: ''
        }
    });

    const handleSubmit = async (formParams: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        if (formParams.senha !== formParams.validateSenha) {
            toast.error('As senhas não coincidem')
        } else {
            const res = await authService.getRegisterParams(formParams)
            if (res.status === 201) {
                toast.success('Conta criada com sucesso')
                setTimeout(() => {
                    router.push('/login')
                }, 3000)
            } else {
                toast.error('Algo deu errado, tente novamente ou contate o suporte')
            }
        }
        setIsLoading(false)
    }

    return (
        <>
            <div className="w-80 sm:w-96 bg-white rounded-lg p-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <div className='flex flex-col gap-y-5'>
                            <div className='flex flex-col sm:flex-row gap-2'>
                                <FormField control={form.control} name='nome' render={({ field }) => {
                                    return <FormItem>
                                        <div className='flex flex-col gap-y-1'>
                                            <FormLabel className="text-light-green">Nome</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Pedro" type="text" required {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                }} />
                                <FormField control={form.control} name='sobrenome' render={({ field }) => {
                                    return <FormItem>
                                        <div className='flex flex-col gap-y-1'>
                                            <FormLabel className="text-light-green">Sobrenome</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Silva" type="text" required {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                }} />
                            </div>
                            <FormField control={form.control} name='email' render={({ field }) => {
                                return <FormItem>
                                    <div className='flex flex-col gap-y-1'>
                                        <FormLabel className="text-light-green">E-mail</FormLabel>
                                        <FormControl>
                                            <Input placeholder="pedrosilva@email.com" type="text" required {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <FormField control={form.control} name='cpf' render={({ field }) => {
                                return <FormItem>
                                    <div className='flex flex-col gap-y-1'>
                                        <FormLabel className="text-light-green">CPF</FormLabel>
                                        <FormControl>
                                            <Input data-mask="000.000.000-00" placeholder="XXX.XXX.XXX-XX" required {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <FormField control={form.control} name='telefone' render={({ field }) => {
                                return <FormItem>
                                    <div className='flex flex-col gap-y-1'>
                                        <FormLabel className="text-light-green">Telefone</FormLabel>
                                        <FormControl>
                                            <Input data-mask="+55 (00) 00000-0000" placeholder="+55 (XX) 9XXXX-XXXX" required {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <FormField control={form.control} name='cep' render={({ field }) => {
                                return <FormItem>
                                    <div className='flex flex-col gap-y-1'>
                                        <FormLabel className="text-light-green">CEP</FormLabel>
                                        <FormControl>
                                            <Input data-mask="00000-000" placeholder="XXXXX-XXX" required {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <FormField control={form.control} name='username' render={({ field }) => {
                                return <FormItem>
                                    <div className='flex flex-col gap-y-1'>
                                        <FormLabel className="text-light-green">Usuário</FormLabel>
                                        <FormControl>
                                            <Input placeholder="pedrosilva" type="text" required {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <div className='flex flex-col sm:flex-row gap-2'>
                                <FormField control={form.control} name='senha' render={({ field }) => {
                                    return <FormItem>
                                        <div className='flex flex-col gap-y-1'>
                                            <FormLabel className="text-light-green">Senha</FormLabel>
                                            <FormControl>
                                                <Input placeholder="********" type="password" required {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                }} />
                                <FormField control={form.control} name='validateSenha' render={({ field }) => {
                                    return <FormItem>
                                        <div className='flex flex-col gap-y-1'>
                                            <FormLabel className="text-light-green">Confirme a senha</FormLabel>
                                            <FormControl>
                                                <Input placeholder="********" type="password" required {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                }} />
                            </div>
                            <div className='mx-auto'>
                                <Button className='w-52 mx-auto mt-2' type="submit" variant="green">{isLoading ? <Spinner /> : "Enviar"}</Button>
                                <p className='text-xs pl-1 pt-1'>Já possui uma conta? Faça <span className='text-light-green hover:underline hover:cursor-pointer' onClick={() => router.push("/login")}>login</span></p>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
            <Toaster />
        </>
    )
}
