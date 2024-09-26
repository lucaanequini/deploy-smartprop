import { useRouter } from "next/navigation"
import Image from "next/image"

export const Navbar = () => {
    const router = useRouter()
    return (
        <div className="w-full flex items-center justify-between px-5 py-3 border-b border-gray-500 bg-slate-50">
            <Image src="/logoBlack.png" className="cursor-pointer" width={65} height={65} alt="logo" onClick={() => router.push('/')} />
            <div className="h-10 w-10 rounded-full bg-light-green border border-gray-500" />
        </div>
    )
}