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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const handleSubmit = async (formParams: z.infer<typeof formSchema>) => {
        const { data, params } = await authService.getRegisterParams(formParams)

        if (data && data.status === 201) {
            router.push('/login')
        }
    }
    return (
        <div className="w-96 bg-white rounded-lg p-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className='flex flex-col gap-y-5'>
                        <div className='flex flex-col sm:flex-row gap-2'>
                            <FormField control={form.control} name='nome' render={({ field }) => {
                                return <FormItem>
                                    <div className='flex flex-col gap-y-1'>
                                        <FormLabel className="text-light-green">Nome</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Pedro" type="text" {...field} />
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
                                            <Input placeholder="Silva" type="text" {...field} />
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
                                        <Input placeholder="pedrosilva@email.com" type="text" {...field} />
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
                                        <Input placeholder="XXX.XXX.XXX-XX" type="number" {...field} />
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
                                        <Input placeholder="+55 (99) 99999-9999" type="number" {...field} />
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
                                        <Input placeholder="XXXXX-XX" type="number" {...field} />
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
                                        <Input placeholder="pedrosilva" type="text" {...field} />
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
                                            <Input placeholder="********" type="password" {...field} />
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
                                            <Input placeholder="********" type="password" {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            }} />
                        </div>
                        <div className='mx-auto'>
                            <Button className='w-52 mx-auto mt-2' type="submit" variant="green">Enviar</Button>
                            <p className='text-xs pl-1 pt-1'>Já possui uma conta? Faça <span className='text-light-green hover:underline hover:cursor-pointer'>login</span></p>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}
