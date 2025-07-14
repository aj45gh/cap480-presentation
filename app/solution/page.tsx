import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ContentWithSidebar } from "@/components/app-sidebar";

export default function Home() {
  return (
    <ContentWithSidebar headerText="How to Learn Using AI">
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
                <p>
                  Provide examples of prompts to explain a concept or ask
                  whether your understanding is correct.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Encourage Students to Ask Questions
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Highlight AI&apos;s ability to parahprase concepts and answer
                  follow up questions.
                </p>
                <p className="mb-2">
                  Encourage students to ask AI for iterative feedback.
                </p>
                <p>Have students use AI to discuss ideas.</p>
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
        </div>
      </div>
    </ContentWithSidebar>
  );
}
