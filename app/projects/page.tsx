import BudgetAllocationChart from "@/components/budget-allocation-chart";
import { DataCard, DataCardIcon, DataCardLabel, DataCardValue } from "@/components/data-card";
import RouteHeader from "@/components/route-header";
import StatusDistributionChart from "@/components/status-distribution-chart";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ConstructionIcon, HandCoinsIcon, HardHatIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-full border-x">
      <RouteHeader label="Project Analytics Overview" className="max-lg:hidden" />

      <div className="space-y-5">
        <section className="grid grid-cols-2 gap-5 max-lg:grid-cols-2">
          <DataCard>
            <DataCardIcon className="text-indigo-900 bg-indigo-50">
              <HardHatIcon />
            </DataCardIcon>
            <DataCardLabel>Total Projects</DataCardLabel>
            <DataCardValue>1,248</DataCardValue>
          </DataCard>

          <DataCard>
            <DataCardIcon className="text-emerald-900 bg-emerald-50">
              <CheckCircleIcon />
            </DataCardIcon>
            <DataCardLabel>Completed</DataCardLabel>
            <DataCardValue>561</DataCardValue>
          </DataCard>

          <DataCard>
            <DataCardIcon className="text-amber-900 bg-amber-50">
              <ConstructionIcon />
            </DataCardIcon>
            <DataCardLabel>Ongoing</DataCardLabel>
            <DataCardValue>436</DataCardValue>
          </DataCard>

          <DataCard>
            <DataCardIcon className="text-yellow-900 bg-yellow-50">
              <HandCoinsIcon />
            </DataCardIcon>
            <DataCardLabel>Total Budget</DataCardLabel>
            <DataCardValue>PHP 390B</DataCardValue>
          </DataCard>
        </section>

        <section className="flex gap-5 w-full max-lg:flex-wrap">
          <StatusDistributionChart />
          <BudgetAllocationChart />
        </section>
      </div>

      <div className="w-full text-center text-zinc-500 mt-5">
        <small>
          Based on the{" "}
          <Link href="https://data.bettergov.ph/datasets/19" target="_blank">
            <Button variant="link" className="p-0 text-xs text-indigo-900/80">
              DPWH Infrastructure Projects Dataset
            </Button>
          </Link>{" "}
          for 2025
        </small>
      </div>
    </div>
  );
}
