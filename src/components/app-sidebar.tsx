import {
  ChevronDownIcon,
  HandCoinsIcon,
  Home,
  PlaySquareIcon,
  ReceiptText,
  Settings,
  Wallet2,
} from "lucide-react";
import { useLocation } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { cn } from "@/lib/utils";
import React from "react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Ad Account",
    icon: PlaySquareIcon,
    subItems: [
      {
        title: "Accounts",
        url: "/ad-account",
      },
      {
        title: "Add Budget",
        url: "/add-budget",
      },
      {
        title: "Access Manager",
        url: "/access-manager",
      },
    ],
  },
  {
    title: "Wallets",
    url: "/#",
    icon: Wallet2,
  },
  {
    title: "Billing",
    url: "/receipt",
    icon: ReceiptText,
  },
  {
    title: "Affiliate",
    url: "/affiliate",
    icon: HandCoinsIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  const pathname = useLocation();

  return (
    <Sidebar className="bg-white border-none">
      <SidebarHeader className="text-2xl font-light pl-4 leading-14">
        addxens
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <React.Fragment key={item.title}>
                  {item.subItems && (
                    <Collapsible defaultOpen className="group/collapsible">
                      <SidebarMenuItem key={item.title}>
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center justify-between">
                            <SidebarMenuButton className="flex items-center gap-2">
                              <item.icon />
                              <span>{item.title}</span>
                            </SidebarMenuButton>
                            <ChevronDownIcon className="group-data-[state=open]/collapsible:rotate-180 transition-all duration-200 text-xs" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub className="border-none transition-all duration-200">
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem
                                key={subItem.title}
                                className="w-full text-muted-foreground px-3"
                              >
                                <SidebarMenuButton
                                  asChild
                                  className="w-full hover:bg-transparent"
                                >
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  )}
                  {!item.subItems && (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          pathname.pathname === item.url &&
                            "bg-blue-500 text-white hover:bg-blue-500"
                        )}
                      >
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </React.Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
