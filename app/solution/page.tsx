import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ContentWithSidebar } from "@/components/app-sidebar";
import { NextButton } from "@/components/next-button";

export default function Home() {
  return (
    <ContentWithSidebar
      headerText="How to Learn Using AI"
      activePage="Solution"
    >
      <div className="w-full flex justify-content justify-center">
        <div className="w-[50%]">
          <Accordion type="single" collapsible defaultValue="">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Teach Students How to Use AI
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Explain the concept of using AI as a teaching tool, rather
                  than a shortcut to answers.
                </p>
                <p className="mb-2">
                  Provide examples of prompts to explain a concept or ask
                  whether your understanding is correct.
                </p>
                <p>
                  Huang (2024) finds that incorporating AI into the learning
                  process not only leads to an enhanced student experience, but
                  prevents abuse later on by teaching students how to properly
                  use these tools.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Encourage Students to Ask Questions
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 gap-2">
                <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
                  <p className="mt-5">
                    Highlight AI&apos;s ability to parahprase concepts and
                    answer follow up questions.
                  </p>
                  <p>Encourage students to ask AI for iterative feedback.</p>
                  <p>
                    Have AI rephrase difficult topics or provide individual
                    examples and scenarios that are easier to understand.
                  </p>
                  <p className="mb-5">
                    Have students use AI to discuss ideas and test their
                    understanding.
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1 relative min-h-[214px]">
                  <Image
                    fill
                    src="/images/question.png"
                    alt="asking a question"
                    objectFit="contain"
                  />
                </div>
                <div className="hidden md:flex"></div>
                <div className="col-span-2 md:col-span-1">
                  <p>
                    Note: Image generated using the prompt "Adult student
                    raising their hand to ask a question in a software
                    development classroom where the teacher is a robot," by
                    OpenAI, Sora, 2025 (
                    <a href="https://sora.chatgpt.com" className="ref-link">
                      https://sora.chatgpt.com
                    </a>
                    )
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Involve AI in the Process
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Ask students to prove understanding through discussion/debate.
                </p>
                <p>
                  Have AI ask students to explain their solutions and provide
                  feedback on responses.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <NextButton link="/concerns" />
        </div>
      </div>
    </ContentWithSidebar>
  );
}
