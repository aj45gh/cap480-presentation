import { Check, X } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ContentWithSidebar } from "@/components/app-sidebar";
import { NextButton } from "@/components/next-button";

export default function Home() {
  return (
    <ContentWithSidebar
      headerText="When Using AI to Learn"
      activePage="Conclusion"
    >
      <div className="w-full flex justify-content justify-center">
        <div className="w-[75%]">
          <div className="grid grid-cols-2 gap-2">
            <Card className="col-span-2 md:col-span-1">
              <CardHeader className="text-center text-lg">
                <CardTitle>
                  <div className="flex justify-content justify-center gap-2">
                    <Check className="text-green-600" />
                    <span className="pt-0.5">DO</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3">
                  <ul className="list-disc">
                    <li>Engage in discussion</li>
                    <li>Ask for help understanding the concept</li>
                    <li>
                      Explain a solution or new concept and have AI give you a
                      score
                    </li>
                    <li>Use feedback to improve your solution</li>
                    <li>Generate custom scenarios to practice</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2 md:col-span-1">
              <CardHeader className="text-center text-lg">
                <CardTitle>
                  <div className="flex justify-content justify-center gap-2">
                    <X className="text-red-600" />
                    <span className="pt-0.5">DO NOT</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3">
                  <ul className="list-disc">
                    <li>Ask AI for the answer</li>
                    <li>Submit AI generated output for an assignment</li>
                    <li>Attempt to pass AI output as your own original work</li>
                    <li>Feed sensitive information to an LLM</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <NextButton link="/data" />
        </div>
      </div>
    </ContentWithSidebar>
  );
}
