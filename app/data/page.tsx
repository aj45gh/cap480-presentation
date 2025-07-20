import { ContentWithSidebar } from "@/components/app-sidebar";
import { FirstPie } from "@/components/chart";
import { NextButton } from "@/components/next-button";

export default function Page() {
  return (
    <ContentWithSidebar
      headerText="How are Developers Using AI?"
      activePage="Full Survey Data"
    >
      <FirstPie />
      <NextButton link="/references" />
    </ContentWithSidebar>
  );
}
