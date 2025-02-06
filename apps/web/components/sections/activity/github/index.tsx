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
import { cn } from "@workspace/ui/lib/utils";
import { ActivityIcons } from "@/components/icons/activity.icon";
import ActivityCard from "@/components/layout/activity-card";
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@workspace/ui/components/chart";
import useGithubDataCharts from "@/hooks/use-github-data";

export default function GithubContributionChartsCard({
  className,
}:  {
    className?: string
}){
  const { chartData } = useGithubDataCharts();

  return (
    <ActivityCard
      className={cn("",className)}
      icon={ActivityIcons.github }
      title={"Github"}
      desc="Daily Github Commit and Contribution"
    >
      <ScrollArea>
        <ChartContainer
          config={{
            contributions: {
              label: "Commit | Contribution",
              color: "#60a5fa",
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
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