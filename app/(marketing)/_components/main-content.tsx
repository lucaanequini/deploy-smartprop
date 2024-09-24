import { Navbar } from "./navbar"
import { FirstView } from "./first-view"
import { MainCard } from "./main-card"
import { Info } from "./info"

export const MainContent = () => {
    return (
        <>
            <div className="hidden sm:block absolute z-[-1] h-screen bg-light-green w-1/3 ml-[66.6%]"></div>
            <div className="h-full sm:h-screen pt-10 flex flex-col gap-y-10 sm:gap-y-32">
                <Navbar />
                <FirstView />
            </div >
            <div className="h-full sm:h-[90vh] flex flex-col items-center justify-center gap-y-5 bg-white">
                <MainCard />
                <Info />
            </div>
        </>
    )
}