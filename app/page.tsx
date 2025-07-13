import { ContentWithSidebar } from "@/components/app-sidebar";
import { AssistantCarousel } from "@/components/assistants-carousel";

export default function Home() {
  return (
    <ContentWithSidebar headerText="Code with a Mentor, Not a Crutch">
      <AssistantCarousel />
    </ContentWithSidebar>
  );
}
