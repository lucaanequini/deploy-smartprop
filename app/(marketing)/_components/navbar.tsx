import { Menu } from "lucide-react"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

import Link from "next/link"

export const Navbar = () => {
    return (
        <div className='bg-dark-green mx-auto rounded-[23px] w-[80%]'
            data-aos='fade-right'
        >
            <div className="flex justify-between px-5 sm:px-10 lg:px-16 py-1 gap-5">
                <img src="/logo.png" alt="Logo" className="w-17 h-11" />
                <div className="md:flex justify-end items-center md:gap-x-8 lg:gap-x-16 text-light-green text-sm font-semibold hidden">
                    <Link className="hover:text-light-green/50" href='/'>Sobre nós</Link>
                    <Link className="hover:text-light-green/50" href='/'>Planos</Link>
                    <Link className="hover:text-light-green/50" href='/'>FAQ&apos;s</Link>
                    <Link className="hover:text-light-green/50" href='/'>Contato</Link>
                    <Link className="hover:text-light-green/50" href='/'>Área do Trader</Link>
                </div>
                <div className="flex items-center md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="text-light-green" />
                        </SheetTrigger>
                        <SheetContent className='w-full bg-dark-green text-white'>
                            <SheetHeader>
                                <img src="/logo.png" alt="Logo" className="w-16 h-10" />
                                <SheetDescription className='text-white text-xl pt-5 pb-5 border-b-2 border-light-green'>
                                    Descubra!
                                </SheetDescription>
                                <div className="flex flex-col gap-y-5">
                                    <div className="flex flex-col gap-y-5 text-xl pt-5 pb-5 border-b-2 border-light-green">
                                        <Link href='/'>Planos</Link>
                                        <Link href='/'>Regulamento</Link>
                                        <Link href='/'>FAQ&apos;s</Link>
                                        <Link href='/'>Sobre nós</Link>
                                    </div>
                                    <Button variant='green' className="rounded-full shadow-3xl w-40 mx-auto sm:mx-0">Área do Trader</Button>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div >
    )
}