import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

export default function AddBudgetSidebar() {
  return (
    <Sidebar className="bg-white border-none">
      <SidebarHeader className="text-2xl font-light pl-4 leading-14">
        addxens
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
