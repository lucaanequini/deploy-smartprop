import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card as CardUi, CardContent } from "@/components/ui/card"

import { PlanCard } from "./plan-card"

export const CarouselPlans = () => {
    return (
        <Carousel className="max-w-[310px] md:max-w-[630px] 2lg:max-w-[960px] h-[120%] mx-auto mt-5 sm:mt-0">
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 2lg:basis-1/3 pt-5" data-aos='fade-left'>
                    <CardUi className="bg-transparent border-0">
                        <CardContent>
                            <PlanCard title="SMART 1k" value="250,00" approvalGoal="1.000" dailyRisk="250" maxLoss="1.000" contracts={5} />
                        </CardContent>
                    </CardUi>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 2lg:basis-1/3 pt-5" data-aos='fade-left' data-aos-delay='200'>
                    <CardUi className="bg-transparent border-0">
                        <CardContent>
                            <PlanCard title="SMART 2k" value="500,00" approvalGoal="2.000" dailyRisk="500" maxLoss="2.000" contracts={10} />
                        </CardContent>
                    </CardUi>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 2lg:basis-1/3 pt-5" data-aos='fade-left' data-aos-delay='400'>
                    <CardUi className="bg-transparent border-0">
                        <CardContent>
                            <PlanCard recomended title="SMART 3k" value="750,00" approvalGoal="3.000" dailyRisk="750" maxLoss="3.000" contracts={15} />
                        </CardContent>
                    </CardUi>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 2lg:basis-1/3 pt-5" data-aos='fade-left' data-aos-delay='600'>
                    <CardUi className="bg-transparent border-0">
                        <CardContent>
                            <PlanCard title="SMART 5k" value="1150,00" approvalGoal="5.000" dailyRisk="1.250" maxLoss="5.000" contracts={25} />
                        </CardContent>
                    </CardUi>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 2lg:basis-1/3 pt-5" data-aos='fade-left' data-aos-delay='600'>
                    <CardUi className="bg-transparent border-0">
                        <CardContent>
                            <PlanCard title="SMART 10k" value="2500,00" approvalGoal="10.000" dailyRisk="2.500" maxLoss="10.000" contracts={50} />
                        </CardContent>
                    </CardUi>
                </CarouselItem>
            </CarouselContent>
            <CarouselNext className="hidden md:flex" />
            <CarouselPrevious className="hidden md:flex" />
        </Carousel>
    )
} 