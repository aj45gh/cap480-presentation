import { ContentWithSidebar } from "@/components/app-sidebar";
import { AssistantCarousel } from "@/components/assistants-carousel";
import { NextButton } from "@/components/next-button";
import { ConisoftIntext } from "@/components/references";

export default function Home() {
  return (
    <ContentWithSidebar headerText="Code with a Mentor, Not a Crutch">
      <AssistantCarousel />
      <div className="w-full flex justify-content justify-center mt-5">
        <div className="w-[75%]">
          <p className="text-xl">AI is Already Here</p>
          <p>
            Many students are already using AI to help them learn new concepts
            and when asked, generally&nbsp;
            <ConisoftIntext>
              had a favorable view of ChatGPT ™ and considered it suitable for
              learning programming concepts
            </ConisoftIntext>
            . It is important for educators to understand the capabilities of AI
            so they can teach students to use it responsibly and effectively to
            improve their knowledge and understanding of programming concepts,
            as well as prevent total reliance on it.
          </p>
          <NextButton link="/problem" />
        </div>
      </div>
    </ContentWithSidebar>
  );
}
