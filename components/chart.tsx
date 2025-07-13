"use client";

import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  RadialBarProps,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

type TooltipPayload = ReadonlyArray<any>;

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
  tooltipPayload?: ReadonlyArray<TooltipPayload>;
};

type GeometrySector = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
};

type PieLabelProps = PieSectorData &
  GeometrySector & {
    tooltipPayload?: any;
  };

const RADIAN = Math.PI / 180;
const COLORS = ["var(--chart-1)", "var(--chart-2)"];

const rawResults = [
  {
    experience: "passive interest",
    uses: [
      "primary output",
      "secondary output",
      "explain concepts",
      "brainstorming",
    ],
    score: 10,
  },
  { experience: "passive interest", uses: ["explain concepts"], score: 8 },
  { experience: "passive interest", uses: ["brainstorming"], score: 10 },
  {
    experience: "senior level",
    uses: [
      "primary output",
      "secondary output",
      "explain concepts",
      "brainstorming",
    ],
    score: 9,
  },
  {
    experience: "passive interest",
    uses: ["primary output", "explain concepts", "brainstorming"],
    score: 7,
  },
  {
    experience: "senior level",
    uses: [
      "primary output",
      "secondary output",
      "explain concepts",
      "brainstorming",
    ],
    score: 10,
  },
  {
    experience: "passive interest",
    uses: [
      "primary output",
      "secondary output",
      "explain concepts",
      "brainstorming",
    ],
    score: 7,
  },
  {
    experience: "senior level",
    uses: [],
    score: 8,
  },
];

const usageByExperienceLevel = [
  {
    usage: "Primary Output",
    "Passive Interest": 3,
    "Senior Level": 2,
  },
  {
    usage: "Secondary Output",
    "Passive Interest": 2,
    "Senior Level": 2,
  },
  {
    usage: "Explain Concepts",
    "Passive Interest": 4,
    "Senior Level": 2,
  },
  {
    usage: "Brainstorming",
    "Passive Interest": 4,
    "Senior Level": 2,
  },
];

const passivePrimaryUsage = [
  { name: "Yes", value: 3 },
  { name: "No", value: 2 },
];
const seniorPrimaryUsage = [
  { name: "Yes", value: 2 },
  { name: "No", value: 1 },
];

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

export function OldPie() {
  return (
    <div className="w-full flex justify-content justify-center">
      <div className="w-[75%] flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              AI Usage by Experience Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                "Primary Output": {
                  label: "Primary Output",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer>
                <BarChart data={usageByExperienceLevel}>
                  <XAxis dataKey="usage" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Passive Interest" fill="var(--chart-1)" />
                  <Bar dataKey="Senior Level" fill="var(--chart-2)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function renderCustomizedLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: PieLabelProps) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      // className="text-lg"
    >
      {`${name} ${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
}

export function SecondPie() {
  return (
    <div className="w-full flex justify-content justify-center">
      <div className="w-[75%] flex flex-col">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Primary Output</CardTitle>
            <CardDescription>
              Generating code, drafting communication, etc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                "Passive Interest": {
                  label: "Passive Interest",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={passivePrimaryUsage}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={100}
                    outerRadius={150}
                    dataKey="value"
                  >
                    {passivePrimaryUsage.map((entry, index) => (
                      <Cell
                        key={`cell-${entry.name}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <text x="50%" y="50%" textAnchor="middle">
                    Hello
                  </text>
                  {/* <Pie
                    data={seniorPrimaryUsage}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={160}
                    dataKey="value"
                  >
                    {seniorPrimaryUsage.map((entry, index) => (
                      <Cell
                        key={`cell-${entry.name}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie> */}
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function FirstPie() {
  return (
    <div className="w-full flex justify-content justify-center">
      <div className="w-[75%] grid grid-cols-2 gap-2">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Primary Output</CardTitle>
            <CardDescription>
              To generate code, draft communication, etc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
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
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Secondary Output</CardTitle>
            <CardDescription>
              To generate documentation, automated tests, summary, etc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
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
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Learning</CardTitle>
            <CardDescription>
              To explain unfamiliar concepts in an interactive way
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
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
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Ideas</CardTitle>
            <CardDescription>
              To engage in dialogue for brainstorming or troubleshooting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
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
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
