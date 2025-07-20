import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ContentWithSidebar } from "@/components/app-sidebar";
import { IdeaPie } from "@/components/chart";
import { NextButton } from "@/components/next-button";

export default function Page() {
  return (
    <ContentWithSidebar
      headerText="Common Concerns"
      activePage="Common Concerns"
    >
      <div className="w-full flex justify-content justify-center">
        <div className="w-[50%]">
          <Accordion type="single" collapsible defaultValue="">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Using AI is cheating
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Huang (2024) shows that when students used AI in a
                  co-regulated learning process, rather than encouraging
                  cheating it promoted creativity and reflection.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Using AI won&apos;t teach students to think for themselves
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  <IdeaPie />
                  <Card className="col-span-2 md:col-span-1">
                    <CardHeader className="text-center text-lg">
                      <CardTitle>
                        Students value an interactive learning experience
                      </CardTitle>
                      <CardDescription>
                        Software developers of all levels already recognize the
                        utility of AI as a collaborative tool to enhance the
                        creative process.
                      </CardDescription>
                    </CardHeader>
                    <Separator />
                    <CardContent>
                      <div className="p-3">
                        <ul className="list-disc">
                          <li>
                            The study conducted by Huang (2024) found that
                            adding AI to the equation increased student critical
                            thinking and motivation even more than traditional
                            co-regulated learning methods, which is consistent
                            with previous studies on the topic.
                          </li>
                          <li>
                            Including AI directly in the learning process allows
                            educators to prompt it to demand more interaction
                            from students such as iterative design, proving
                            understanding through expanding on concepts, and
                            justifying assertions through debate.
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                If AI can do all this, why do we still need school?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Teachers are still needed to fill the role of guiding and
                  mentoring students.
                </p>
                <p className="mb-2">
                  AI can handle the simple, repetitive questions and provide
                  feedback early in the process, freeing up teachers to focus
                  where their effort makes the biggest impact on the learning
                  process.
                </p>
                <p>
                  Teachers guide students in using AI to accomplish their goals
                  and course correct when things are getting off track.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <NextButton link="/conclusion" />
        </div>
      </div>
    </ContentWithSidebar>
  );
}
