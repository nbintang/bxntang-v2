"use client";
import * as React from "react";
import Calendar, {
  type Props as ActivityCalendarProps,
  type ThemeInput,
} from "react-activity-calendar";
import { transformData } from '../../lib/githubLib';

export type Props = {
  data: GithubApiResponse;
  errorMessage?: string;
  isError?: boolean;
  transformTotalCount?: boolean;
  transformData?: (data: Array<GithubActivityProps>) => Array<unknown>;
  year?: GithubYear;
} & Omit<ActivityCalendarProps, "data">;

const GitHubCalendar = React.forwardRef<HTMLElement, Props>(
  (
    {
      data,
      year = "last",
      labels,
      loading: isLoading,
      transformData: transformFn,
      transformTotalCount = true,
      isError = false,
      errorMessage = `Error – Fetching GitHub contribution data for nbintang failed.`,
      ...props
    },
    ref
  ) => {
    const theme = props.theme ?? gitHubTheme;
    const defaultLabels = {
      totalCount: `{{count}} contributions in ${
        year === "last" ? "the last year" : "{{year}}"
      }`,
    };
    const totalCount = year === "last" ? data.total.lastYear : data.total[year];
    return (
      <Calendar
        ref={ref}
        data={transformData(data.contributions, transformFn)}
        labels={Object.assign({}, defaultLabels, labels)}
        totalCount={transformTotalCount ? undefined : totalCount}
        theme={theme}
        loading={isLoading}
        maxLevel={4}
        {...props}
      />
    );
  }
);

GitHubCalendar.displayName = "GitHubCalendar";

export const gitHubTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  // dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
} satisfies ThemeInput;

export default GitHubCalendar;
