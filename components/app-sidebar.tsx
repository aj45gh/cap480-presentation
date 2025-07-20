import { ReactNode } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Problem",
    url: "/problem",
  },
  {
    title: "Solution",
    url: "/solution",
  },
  { title: "Common Concerns", url: "/concerns" },
  { title: "Conclusion", url: "/conclusion" },
  {
    title: "Full Survey Data",
    url: "/data",
  },
  { title: "References", url: "/references" },
];

export function ContentWithSidebar({
  children,
  headerText,
  activePage = "",
}: {
  children: ReactNode;
  headerText: string;
  activePage?: string;
}) {
  return (
    <SidebarProvider>
      <AppSidebar activePage={activePage} />
      <main className="flex w-full min-h-screen flex-col">
        <div className="sticky top-0 grid content-center mb-2 bg-background z-99">
          <SidebarTrigger className="absolute left-2 top-2" />
          <span className="text-2xl text-center py-2">{headerText}</span>
        </div>
        <div>{children}</div>
      </main>
    </SidebarProvider>
  );
}

function AppSidebar({ activePage }: { activePage: string }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.title === activePage}
                  >
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>Stephen James</SidebarMenuItem>
          <SidebarMenuItem>CAP 480</SidebarMenuItem>
          <SidebarMenuItem>ECPI University</SidebarMenuItem>
          <SidebarMenuItem>7/13/2025</SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
