'use client'

import { Input } from "@/components/ui/input";

import { Spinner } from "@/components/spinner";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectValue,
    SelectTrigger
} from "@/components/ui/select";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button";

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"

import { toast, Toaster } from "sonner";

import paymentService from "@/services/paymentService";

import { useState } from "react";

import { X } from "lucide-react";

const planoValores = {
    "100": 250,
    "101": 500,
    "102": 750,
    "103": 1150,
    "104": 2500
};

const plataformaValores = {
    "profitOne": 0,
    "profitTwo": 230
};

const FormSchema = z.object({
    plano: z
        .string({
            required_error: "Please select an email to display.",
        }),
    plataforma: z
        .string({
            required_error: "Please select an email to display.",
        })
})

const FormSchemaTwo = z.object({
    coupon: z.string()
})

interface CartFormProps {
    userId: string
}


export const CartForm = ({ userId }: CartFormProps) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    });

    const formTwo = useForm<z.infer<typeof FormSchemaTwo>>({
        resolver: zodResolver(FormSchemaTwo),
        defaultValues: {
            coupon: ''
        }
    });

    const [coupon, setCoupon] = useState<string | undefined>()
    const [couponValue, setCouponValue] = useState<number>(0)

    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingPurchase, setIsLoadingPurchase] = useState(false)

    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;

    const createPayment = async (product: string) => {
        if (token) {
            setIsLoadingPurchase(true)
            try {
                const res = await paymentService.createPayment(token, userId, product, coupon)
                if (res.status === 201) {
                    window.open(res.data.payment_link, '_blank')
                }
            } catch (error) {
                console.log(error)
            }
        }
        setIsLoadingPurchase(false)
    }

    const checkCoupon = async (coupon: string) => {
        setIsLoading(true)
        if (token) {
            try {
                const res = await paymentService.checkCoupon(token, coupon)
                if (res.data.exists === true && res.data.coupon.remaining_uses > 0) {
                    setCoupon(res.data.coupon.code)
                    setCouponValue(res.data.coupon.discount_percentage)
                } else {
                    toast.error('Cupom inválido')
                }
            } catch (error) {
                toast.error('Cupom inválido')
            }
        }
        setIsLoading(false)
    }

    function onSubmit(data: z.infer<typeof FormSchema>) {
        createPayment(data.plano)
    }

    function onSubmitTwo(data: z.infer<typeof FormSchemaTwo>) {
        checkCoupon(data.coupon)
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-80 sm:w-96 bg-white rounded-lg p-5 flex flex-col justify-center gap-y-5">
                <div className="font-semibold text-black pb-3 border-b border-dashed border-light-gray">Plano / Plataforma</div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="w-full flex justify-between items-center pb-5 border-b border-dashed border-light-gray">
                            <FormField
                                control={form.control}
                                name="plano"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Plano" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Planos</SelectLabel>
                                                    <SelectItem value="100">Smart 1k</SelectItem>
                                                    <SelectItem value="101">Smart 2k</SelectItem>
                                                    <SelectItem value="102">Smart 3k</SelectItem>
                                                    <SelectItem value="103">Smart 5k</SelectItem>
                                                    <SelectItem value="104">Smart 10k</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center">
                                <p>R$ {planoValores[form.watch("plano") as keyof typeof planoValores] || ""}</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center py-5 border-b border-dashed border-light-gray">
                            <FormField
                                control={form.control}
                                name="plataforma"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Plataforma" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Plataformas</SelectLabel>
                                                    <SelectItem value="profitOne">Profit One</SelectItem>
                                                    <SelectItem value="profitTwo">Profit Pro</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center">
                                <p>R$ {plataformaValores[form.watch("plataforma") as keyof typeof plataformaValores] || ""}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-5">
                            <p>Total:</p>
                            <p>
                                R$ {
                                    (planoValores[form.watch("plano") as keyof typeof planoValores] || 0) +
                                    (plataformaValores[form.watch("plataforma") as keyof typeof plataformaValores] || 0) -
                                    ((planoValores[form.watch("plano") as keyof typeof planoValores] || 0) +
                                        (plataformaValores[form.watch("plataforma") as keyof typeof plataformaValores] || 0)) * couponValue / 100
                                }
                            </p>
                        </div>
                        <Button type="submit" variant="green" className="w-full">
                            {isLoadingPurchase ? <Spinner /> : "Pagar"}
                        </Button>
                    </form>
                </Form>
                {!coupon ? (
                    <Form {...formTwo}>
                        <form onSubmit={formTwo.handleSubmit(onSubmitTwo)} className="flex gap-x-2 items-center">
                            <FormField
                                control={formTwo.control}
                                name="coupon"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Input type="text" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" variant="green" className="w-20">
                                {isLoading ? <Spinner /> : "Aplicar"}
                            </Button>
                        </form>
                    </Form>
                ) : (
                    <div className="flex justify-between items-center rounded-lg border border-gray-300 p-2">
                        <p>Cupom: {coupon}</p>
                        <p>{couponValue}%</p>
                        <X className="cursor-pointer text-gray-300 hover:text-red-600" onClick={() => { setCoupon(undefined); setCouponValue(0); }} />
                    </div>
                )}
            </div>
            <Toaster />
        </div>
    )
}