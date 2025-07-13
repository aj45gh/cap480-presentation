import { ContentWithSidebar } from "@/components/app-sidebar";
import { FirstPie } from "@/components/chart";

export default function Page() {
  return (
    <ContentWithSidebar headerText="How are Developers Using AI?">
      <FirstPie />
    </ContentWithSidebar>
  );
}
