'use client'

import { MainContent } from "./_components/main-content"
import { Plans } from "./_components/plans"
import { Features } from "./_components/features"
import { Faq } from "./_components/faq"
import { Contact } from "./_components/contact"
import { Footer } from "./_components/footer"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true
        })
    }, [])
    return (
        <div className="overflow-x-hidden">
            <MainContent />
            <Features />
            <Plans />
            <Faq />
            <div>
                <Contact />
                <Footer />
            </div>
        </div>
    )
}