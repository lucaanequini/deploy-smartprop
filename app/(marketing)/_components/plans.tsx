import { PlanCard } from "@/components/plan-card"

import { ArrowRight } from "lucide-react"
import { CarouselPlans } from "@/components/carousel-plans"

export const Plans = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-16 xl:gap-20" data-aos='fade-in' id="planos">
            <div className="flex flex-col gap-y-3 items-center justify-center p-3">
                <p className="text-light-green text-3xl xl:text-5xl font-semibold">Nossos Planos</p>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="flex gap-2 items-center lg:hidden">
                    <p className="text-white text-xs">Deslize para ver mais </p>
                    <ArrowRight className="h-4 w-4 text-white" />
                </div>
                <div className="items-center gap-x-8 hidden 2xl:flex">
                    <div>
                        <PlanCard title="SMART 1k" value="250,00" approvalGoal="1.000" dailyRisk="250" maxLoss="1.000" contracts={5} />
                    </div>
                    <div data-aos-delay='200'>
                        <PlanCard title="SMART 2k" value="500,00" approvalGoal="2.000" dailyRisk="500" maxLoss="2.000" contracts={10} />
                    </div>
                    <div><PlanCard recomended title="SMART 3k" value="750,00" approvalGoal="3.000" dailyRisk="750" maxLoss="3.000" contracts={15} /></div>
                    <div><PlanCard title="SMART 5k" value="1150,00" approvalGoal="5.000" dailyRisk="1.250" maxLoss="5.000" contracts={25} /></div>
                    <div><PlanCard title="SMART 10k" value="2500,00" approvalGoal="10.000" dailyRisk="2.500" maxLoss="10.000" contracts={50} /></div>
                </div>
                <div className="flex items-center justify-center 2xl:hidden" data-aos='fade-up'>
                    <CarouselPlans />
                </div>
            </div>
        </div>
    )
}