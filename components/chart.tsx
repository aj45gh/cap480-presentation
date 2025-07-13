"use client";

import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

// const rawResults = [
//   {
//     experience: "passive interest",
//     uses: [
//       "primary output",
//       "secondary output",
//       "explain concepts",
//       "brainstorming",
//     ],
//     score: 10,
//   },
//   { experience: "passive interest", uses: ["explain concepts"], score: 8 },
//   { experience: "passive interest", uses: ["brainstorming"], score: 10 },
//   {
//     experience: "senior level",
//     uses: [
//       "primary output",
//       "secondary output",
//       "explain concepts",
//       "brainstorming",
//     ],
//     score: 9,
//   },
//   {
//     experience: "passive interest",
//     uses: ["primary output", "explain concepts", "brainstorming"],
//     score: 7,
//   },
//   {
//     experience: "senior level",
//     uses: [
//       "primary output",
//       "secondary output",
//       "explain concepts",
//       "brainstorming",
//     ],
//     score: 10,
//   },
//   {
//     experience: "passive interest",
//     uses: [
//       "primary output",
//       "secondary output",
//       "explain concepts",
//       "brainstorming",
//     ],
//     score: 7,
//   },
//   {
//     experience: "senior level",
//     uses: [],
//     score: 8,
//   },
// ];

const primaryUsage = [
  { name: "Passive Interest", uv: 3 / 5, fill: "var(--chart-2)" },
  { name: "Senior Level", uv: 2 / 3, fill: "var(--chart-1)" },
];
const secondaryUsage = [
  { name: "Passive Interest", uv: 2 / 5, fill: "var(--chart-2)" },
  { name: "Senior Level", uv: 2 / 3, fill: "var(--chart-1)" },
];
const learningUsage = [
  { name: "Passive Interest", uv: 4 / 5, fill: "var(--chart-2)" },
  { name: "Senior Level", uv: 2 / 3, fill: "var(--chart-1)" },
];
const ideaUsage = [
  { name: "Passive Interest", uv: 4 / 5, fill: "var(--chart-2)" },
  { name: "Senior Level", uv: 2 / 3, fill: "var(--chart-1)" },
];

export function FirstPie() {
  return (
    <div className="w-full flex justify-content justify-center">
      <div className="w-[75%] grid grid-cols-2 gap-2">
        <Card className="col-span-2 md:col-span-1">
          <CardHeader className="text-center">
            <CardTitle>Primary Output</CardTitle>
            <CardDescription>
              To generate code, draft communication, etc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <ResponsiveContainer width="100%" aspect={1}>
                <RadialBarChart
                  data={primaryUsage}
                  startAngle={180}
                  endAngle={0}
                  innerRadius="50%"
                  outerRadius="90%"
                >
                  <PolarAngleAxis tick={false} domain={[0, 1]} type="number" />
                  <RadialBar dataKey="uv" background />
                  <text
                    x="50%"
                    y="45%"
                    style={{ fill: "var(--chart-1)" }}
                    textAnchor="middle"
                  >
                    {`Senior Level ${((2 / 3) * 100).toFixed(0)}%`}
                  </text>
                  <text
                    x="50%"
                    y="50%"
                    style={{ fill: "var(--chart-2)" }}
                    textAnchor="middle"
                  >
                    {`Passive Interest ${((3 / 5) * 100).toFixed(0)}%`}
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1">
          <CardHeader className="text-center">
            <CardTitle>Secondary Output</CardTitle>
            <CardDescription>
              To generate documentation, automated tests, summary, etc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <ResponsiveContainer width="100%" aspect={1}>
                <RadialBarChart
                  data={secondaryUsage}
                  startAngle={180}
                  endAngle={0}
                  innerRadius="50%"
                  outerRadius="90%"
                >
                  <PolarAngleAxis tick={false} domain={[0, 1]} type="number" />
                  <RadialBar dataKey="uv" background />
                  <text
                    x="50%"
                    y="45%"
                    style={{ fill: "var(--chart-1)" }}
                    textAnchor="middle"
                  >
                    {`Senior Level ${((2 / 3) * 100).toFixed(0)}%`}
                  </text>
                  <text
                    x="50%"
                    y="50%"
                    style={{ fill: "var(--chart-2)" }}
                    textAnchor="middle"
                  >
                    {`Passive Interest ${((2 / 5) * 100).toFixed(0)}%`}
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1">
          <CardHeader className="text-center">
            <CardTitle>Learning</CardTitle>
            <CardDescription>
              To explain unfamiliar concepts in an interactive way
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <ResponsiveContainer width="100%" aspect={1}>
                <RadialBarChart
                  data={learningUsage}
                  startAngle={180}
                  endAngle={0}
                  innerRadius="50%"
                  outerRadius="90%"
                >
                  <PolarAngleAxis tick={false} domain={[0, 1]} type="number" />
                  <RadialBar dataKey="uv" background />
                  <text
                    x="50%"
                    y="45%"
                    style={{ fill: "var(--chart-1)" }}
                    textAnchor="middle"
                  >
                    {`Senior Level ${((2 / 3) * 100).toFixed(0)}%`}
                  </text>
                  <text
                    x="50%"
                    y="50%"
                    style={{ fill: "var(--chart-2)" }}
                    textAnchor="middle"
                  >
                    {`Passive Interest ${((4 / 5) * 100).toFixed(0)}%`}
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1">
          <CardHeader className="text-center">
            <CardTitle>Ideas</CardTitle>
            <CardDescription>
              To engage in dialogue for brainstorming or troubleshooting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <ResponsiveContainer width="100%" aspect={1}>
                <RadialBarChart
                  data={ideaUsage}
                  startAngle={180}
                  endAngle={0}
                  innerRadius="50%"
                  outerRadius="90%"
                >
                  <PolarAngleAxis tick={false} domain={[0, 1]} type="number" />
                  <RadialBar dataKey="uv" background />
                  <text
                    x="50%"
                    y="45%"
                    style={{ fill: "var(--chart-1)" }}
                    textAnchor="middle"
                  >
                    {`Senior Level ${((2 / 3) * 100).toFixed(0)}%`}
                  </text>
                  <text
                    x="50%"
                    y="50%"
                    style={{ fill: "var(--chart-2)" }}
                    textAnchor="middle"
                  >
                    {`Passive Interest ${((4 / 5) * 100).toFixed(0)}%`}
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
