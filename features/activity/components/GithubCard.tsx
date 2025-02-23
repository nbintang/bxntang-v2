"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { GitCommitHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActivityIcons } from "@/components/icons/ActivityIcon";
import ActivityCard from "@/components/layouts/ActivityCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import useGithubDataCharts from "@/features/activity/hooks/useGithubData";

export default function GithubContributionChartsCard({
  className,
}:  {
    className?: string
}){
  const { chartData } = useGithubDataCharts();

  return (
    <ActivityCard
      className={cn("",className)}
      icon={ActivityIcons.github}
      title={"Github"}
      desc="Daily Github Commit and Contribution"
    >
      <ScrollArea>
        <ChartContainer
          config={{
            contributions: {
              label: "Commit | Contribution: ",
              color: "#60a5fa",
            },
          }}
          className="h-[200px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
              className="text-[6px] sm:text-[10px]"
                dataKey="date"
                tickFormatter={(value) => {
                    const [year, month] = value.split("-");
                    return `${
                      [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ][parseInt(month) - 1]
                    } ${year}`;
                  }}
                interval={2}
                angle={-45}
                textAnchor="end"
                height={50}
              />
              <YAxis allowDecimals={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="contributions"
                stroke="#2563eb"
                strokeWidth={2}
                dot={({ cx, cy, payload }) => {
                  const r = 24;
                  return (
                    <GitCommitHorizontal
                      className="w-2 h-2"
                    key={`${payload.date}-${payload.contributions}`}
                      x={cx - r / 2}
                      y={cy - r / 2}
                      width={r}
                      height={r}
                      stroke="#2563eb"
                    />
                  );
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </ActivityCard>
  );
}