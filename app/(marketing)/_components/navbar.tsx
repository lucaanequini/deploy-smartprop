import { Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"

import Link from "next/link"

import { useState } from "react"

export const Navbar = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <div className='bg-dark-green mx-auto rounded-[23px] w-[80%]'
            data-aos='fade-right'
        >
            <div className="flex justify-between px-5 sm:px-10 lg:px-16 py-1 gap-5">
                <img src="/logo.png" alt="Logo" className="w-17 h-11" />
                <div className="md:flex justify-end items-center md:gap-x-8 lg:gap-x-16 text-light-green text-sm font-semibold hidden">
                    <a className="hover:text-light-green/50 cursor-pointer" onClick={() => scrollToSection('info')}>Sobre nós</a>
                    <a className="hover:text-light-green/50 cursor-pointer" onClick={() => scrollToSection('planos')}>Planos</a>
                    <a className="hover:text-light-green/50 cursor-pointer" onClick={() => scrollToSection('faq')}>FAQ&apos;s</a>
                    <a className="hover:text-light-green/50 cursor-pointer" onClick={() => scrollToSection('contato')}>Contato</a>
                    <Link className="hover:text-light-green/50 cursor-pointer" href='/login'>Área do Trader</Link>
                </div>
                <div className="flex items-center md:hidden" >
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTitle></SheetTitle>
                        <SheetTrigger asChild>
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
                                        <a onClick={() => scrollToSection('info')}>Sobre nós</a>
                                        <a onClick={() => scrollToSection('planos')}>Planos</a>
                                        <a onClick={() => scrollToSection('faq')}>FAQ&apos;s</a>
                                        <a onClick={() => scrollToSection('contato')}>Contato</a>
                                    </div>
                                    <Button variant='green' className="rounded-full shadow-3xl w-40 mx-auto sm:mx-0" onClick={() => router.push("/login")}>
                                        Área do Trader
                                    </Button>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div >
    )
}