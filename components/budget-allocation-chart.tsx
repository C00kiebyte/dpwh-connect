"use client";

import { NewspaperIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { type: "Roads & Highways", budget: 150 },
  { type: "Bridges", budget: 85 },
  { type: "Flood Control", budget: 110 },
  { type: "Public Buildings", budget: 45 },
];

const chartConfig = {
  budget: {
    label: "Budget",
  },
} satisfies ChartConfig;

export default function BudgetAllocationChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-semibold text-zinc-500">
          <NewspaperIcon />
          Budget allocation by Type (Billions PHP)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="type" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis dataKey="budget" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="budget" radius={8} fill="var(--color-indigo-800)" barSize={50} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
