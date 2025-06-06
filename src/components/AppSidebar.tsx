import { Plus } from "lucide-react";
import React from "react";

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
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

// Menu workspaces.
const workspaces = [
	{
		title: "Learn Backend JavaScript",
		url: "#",
		emoji: "💻",
	},
	{
		title: "UTBK Prep",
		url: "#",
		emoji: "📔",
	},
	{
		title: "Boot.dev Course",
		url: "#",
		emoji: "🥾",
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Workspaces</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{workspaces.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<span>{item.emoji}</span>
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<Button
								variant={"ghost"}
								className="border-border border-1 hover:border-accent"
							>
								<Plus />
							</Button>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	);
}
