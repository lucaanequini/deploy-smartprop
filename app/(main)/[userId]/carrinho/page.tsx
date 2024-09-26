'use client'

import { Navbar } from "@/components/navbar";
import { CartForm } from "./_components/cart-form";
import { PlanCard } from "@/components/plan-card";

import { useState } from "react";

const ChartPage = ({
    params
}: { params: { userId: string } }) => {
    const [selectedPlanValue, setSelectedPlanValue] = useState<string>('');

    const handlePlanChange = (newValue: string) => {
        setSelectedPlanValue(newValue);
        console.log("Plano selecionado no PlanCard:", newValue);
    };

    return (
        <div className="h-full sm:h-screen flex flex-col overflow-auto">
            <Navbar />
            <div className="my-5 sm:mt-0 flex justify-center items-center h-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5">
                    <CartForm userId={params.userId} onPlanChange={handlePlanChange} />
                    {selectedPlanValue === "100" && (
                        <PlanCard onCart title="SMART 1k" value="250,00" approvalGoal="1.000" dailyRisk="250" maxLoss="1.000" contracts={5} />
                    )}
                    {selectedPlanValue === "101" && (
                        <PlanCard onCart title="SMART 2k" value="500,00" approvalGoal="2.000" dailyRisk="500" maxLoss="2.000" contracts={10} />
                    )}
                    {selectedPlanValue === "102" && (
                        <PlanCard onCart recomended title="SMART 3k" value="750,00" approvalGoal="3.000" dailyRisk="750" maxLoss="3.000" contracts={15} />
                    )}
                    {selectedPlanValue === "103" && (
                        <PlanCard onCart title="SMART 5k" value="1150,00" approvalGoal="5.000" dailyRisk="1.250" maxLoss="5.000" contracts={25} />
                    )}
                    {selectedPlanValue === "104" && (
                        <PlanCard onCart title="SMART 10k" value="2500,00" approvalGoal="10.000" dailyRisk="2.500" maxLoss="10.000" contracts={50} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChartPage;