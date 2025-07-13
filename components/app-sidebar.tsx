import { ReactNode } from "react";

import {
  Sidebar,
  SidebarContent,
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
  {
    title: "Data",
    url: "/data",
  },
  {
    title: "Considerations",
    url: "/considerations",
  },
  { title: "References", url: "/references" },
];

export function ContentWithSidebar({
  children,
  headerText,
}: {
  children: ReactNode;
  headerText: string;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full min-h-screen flex-col">
        <div className="sticky top-0 grid content-center mb-2">
          <SidebarTrigger className="absolute left-2 top-2" />
          <span className="text-xl text-center py-2">{headerText}</span>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
    </Sidebar>
  );
}
