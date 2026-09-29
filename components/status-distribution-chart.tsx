"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { PieChartIcon } from "lucide-react";

const chartData = [
  { status: "completed", projects: 561, fill: "var(--color-emerald-500)" },
  { status: "ongoing", projects: 436, fill: "var(--color-amber-500)" },
  { status: "planned", projects: 251, fill: "var(--color-indigo-500)" },
];

const chartConfig = {
  projects: {
    label: "Projects",
  },
  completed: {
    label: "Completed",
  },
  ongoing: {
    label: "Ongoing",
  },
  planned: {
    label: "Planned",
  },
} satisfies ChartConfig;

export default function StatusDistributionChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-semibold text-zinc-500">
          <PieChartIcon />
          Status Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="projects" nameKey="status" innerRadius={50} />
            <ChartLegend content={<ChartLegendContent nameKey="status" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
