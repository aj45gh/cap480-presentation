import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ContentWithSidebar } from "@/components/app-sidebar";
import { PrimaryPie } from "@/components/chart";
import { ChatbotsIntext } from "@/components/references";
import { ConisoftIntext } from "@/components/references";
import { NextButton } from "@/components/next-button";

export default function Page() {
  return (
    <ContentWithSidebar
      headerText="Educational Challenges and AI"
      activePage="Problem"
    >
      <div className="w-full flex justify-content justify-center">
        <div className="w-[75%]">
          <div className="grid grid-cols-2 gap-2">
            <Card className="col-span-2 md:col-span-1">
              <CardHeader className="text-center text-lg">
                <CardTitle>Students are already using AI</CardTitle>
                <CardDescription>
                  <ConisoftIntext>
                    ChatGPT™ has become popular among students who are not yet
                    experts in their fields but need assistance in better
                    understanding their course materials and completing their
                    assignments
                  </ConisoftIntext>
                  .
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardContent>
                <div className="p-3">
                  <ul className="list-disc">
                    <li>
                      Generative AI has already progressed to the point where it
                      can handle simple coding assignments.
                    </li>
                    <li>
                      Relying on AI to do the work skips valuable learning
                      opportunities.
                    </li>
                    <li>
                      It can be difficult to tell the difference between code
                      written by a student and code written by AI.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <PrimaryPie />
            <div className="col-span-2 flex justify-center">
              <Card className="w-full md:w-[50%]">
                <CardHeader className="text-center text-lg">
                  <CardTitle>Teaching is a lot of work</CardTitle>
                  <CardDescription>
                    Grading assignments and providing meaningful feedback is a
                    time and labor intensive process.
                  </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="p-3">
                    <ul className="list-disc">
                      <li>
                        <ChatbotsIntext>
                          Educators may struggle to monitor student performance
                          in real time and identify at-risk students
                        </ChatbotsIntext>
                        .
                      </li>
                      <li>
                        Students don&apos;t receive feedback on their work or
                        train of thought until they have submitted the final
                        product.
                      </li>
                      <li>
                        Instructors have limited time to answer questions and
                        provide guidance one-on-one.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <NextButton link="/solution" />
        </div>
      </div>
    </ContentWithSidebar>
  );
}
