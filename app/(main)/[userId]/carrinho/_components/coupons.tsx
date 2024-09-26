'use client'

import { useState } from "react";

import { Input } from "@/components/ui/input";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form"

import { Button } from "@/components/ui/button";

import { toast } from "sonner";

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"

import paymentService from "@/services/paymentService";

const FormSchema = z.object({
    coupon: z.string()
})

interface CouponsCheckProps {
    token: string | null
    onCouponUpdate: (coupon: string | null) => void
}

export const CouponsCheck = ({ token, onCouponUpdate }: CouponsCheckProps) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    });

    const checkCoupon = async (coupon: string) => {
        if (token) {
            try {
                const res = await paymentService.checkCoupon(token, coupon)
                if (res.data.exists === true) {
                    toast.success('Cupom aplicado com sucesso!')
                    onCouponUpdate(res.data);
                } else {
                    toast.error('Cupom inválido')
                }
            } catch (error) {
                toast.error('Cupom inválido')
            }
        }
    }

    function onSubmit(data: z.infer<typeof FormSchema>) {
        checkCoupon(data.coupon)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="coupon"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button variant="green" className="w-full">Aplicar</Button>
            </form>
        </Form>
    )
}