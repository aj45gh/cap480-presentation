import { ContentWithSidebar } from "@/components/app-sidebar";
import { References } from "@/components/references";

export default function Page() {
  return (
    <ContentWithSidebar headerText="References" activePage="References">
      <References />
    </ContentWithSidebar>
  );
}
