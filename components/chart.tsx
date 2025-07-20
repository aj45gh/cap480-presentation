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

interface UsageData {
  name: string;
  uv: number;
  fill: string;
}

interface ChartProps {
  title: string;
  description: string;
  data: UsageData[];
}

function Chart({ title, description, data }: ChartProps) {
  return (
    <Card className="col-span-2 md:col-span-1">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}}>
          <ResponsiveContainer
            width="100%"
            aspect={1}
            className="overflow-hidden"
          >
            <RadialBarChart
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius="50%"
              outerRadius="90%"
            >
              <PolarAngleAxis tick={false} domain={[0, 1]} type="number" />
              <RadialBar dataKey="uv" background />
              {data.map((d, idx) => (
                <text
                  key={d.name}
                  x="50%"
                  y={`${50 - idx * 5}%`}
                  style={{ fill: d.fill }}
                  textAnchor="middle"
                >
                  {`${d.name} ${(d.uv * 100).toFixed(0)}%`}
                </text>
              ))}
            </RadialBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function PrimaryPie() {
  return (
    <Chart
      title="Primary Output"
      description="To generate code, draft communication, etc."
      data={primaryUsage}
    />
  );
}

export function SecondaryPie() {
  return (
    <Chart
      title="Secondary Output"
      description="To generate documentation, automated tests, summary, etc."
      data={secondaryUsage}
    />
  );
}

export function LearningPie() {
  return (
    <Chart
      title="Learning"
      description="To explain unfamiliar concepts in an interactive way"
      data={learningUsage}
    />
  );
}

export function IdeaPie() {
  return (
    <Chart
      title="Ideas"
      description="To engage in dialogue for brainstorming or troubleshooting"
      data={ideaUsage}
    />
  );
}

export function FirstPie() {
  return (
    <div className="w-full flex justify-content justify-center">
      <div className="w-[75%] grid grid-cols-2 gap-2">
        <PrimaryPie />
        <SecondaryPie />
        <LearningPie />
        <IdeaPie />
      </div>
    </div>
  );
}
