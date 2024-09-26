import Image from "next/image"

export const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between px-5 py-3 border-b border-gray-500 bg-slate-50">
            <Image src="/logoBlack.png" width={65} height={65} alt="logo" />
            <div className="h-10 w-10 rounded-full bg-light-green border border-gray-500" />
        </div>
    )
}