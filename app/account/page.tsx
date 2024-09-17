'use client'

import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import authService from "@/services/authService";
import { Form, FormField, FormLabel, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
    nome: z.string(),
    sobrenome: z.string(),
    cpf: z.string(),
    email: z.string(),
    telefone: z.string(),
    rua: z.string(),
    numero: z.string(),
    complemento: z.string(),
    cep: z.string(),
    senha: z.string(),
    validateSenha: z.string(),
    username: z.string()
})

const RegisterPage = () => {
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField control={form.control} name='nome' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu nome" type="nome" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='sobrenome' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>sobrenome</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu sobrenome" type="sobrenome" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='email' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>email</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='cpf' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>cpf</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu cpf" type="cpf" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='telefone' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>telefone</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu telefone" type="telefone" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='rua' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>rua</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu rua" type="rua" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='cep' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>cep</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu cep" type="cep" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='numero' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>numero</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu numero" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='complemento' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>complemento</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu complemento" type="complemento" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='username' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>username</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu username" type="username" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='senha' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>senha</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu senha" type="senha" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name='validateSenha' render={({ field }) => {
                    return <FormItem>
                        <FormLabel>validateSenha</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu validateSenha" type="validateSenha" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />


                <Button type="submit">Enviar</Button>
            </form>
        </Form>

    )

}

export default RegisterPage;

// const formData = new FormData(ev.currentTarget)
//         const nome = formData.get('nome')!.toString()
//         const sobrenome = formData.get('sobrenome')!.toString()
//         const cpf = formData.get('cpf')!.toString()
//         const telefone = formData.get('phone')!.toString()
//         const email = formData.get('email')!.toString()
//         const rua = formData.get('endereco')!.toString()
//         const cep = formData.get('cep')!.toString()
//         const numero = parseInt(formData.get('numero')!.toString(), 10)
//         const complemento = formData.get('complemento')!.toString()
//         const senha = formData.get('senha')!.toString()
//         const validateSenha = formData.get('validateSenha')!.toString()
//         const username = formData.get('username')!.toString()