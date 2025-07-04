"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PomodoroCardFocus from "./PomodoroCardFocus";
import { EllipsisVertical } from "lucide-react";
import PomodoroCardRest from "./PomodoroCardRest";
import { useTimerStore } from "@/lib/store";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import PomodoroCardPopoverSettings from "./PomodoroCardPopoverSettings";
import { TimerType } from "@/lib/store";

export default function PomodoroCard() {
	const { focusMode, restMode, activeTimer, setActiveTimer } = useTimerStore();

	interface TabState {
		title: string;
		value: TimerType;
		id: number;
		component: React.ReactNode;
	}

	const tabs: TabState[] = [
		{
			title: "Focus",
			value: "focus",
			id: 1,
			component: <PomodoroCardFocus />,
		},
		{
			title: "Rest",
			value: "rest",
			id: 2,
			component: <PomodoroCardRest />,
		},
	];

	return (
		<Tabs className="w-full" value={activeTimer} defaultValue="focus">
			<div className="flex justify-between w-full">
				<TabsList className="w-full md:w-fit">
					{tabs.map((tab) => (
						<TabsTrigger
							disabled={restMode !== "idle" || focusMode !== "idle"}
							key={tab.id}
							value={tab.value}
							onClick={() => setActiveTimer(tab.value)}
						>
							{tab.title}
						</TabsTrigger>
					))}
				</TabsList>
				<Popover>
					<PopoverTrigger
						disabled={restMode !== "idle" || focusMode !== "idle"}
						className="ml-2"
					>
						<Button
							disabled={restMode !== "idle" || focusMode !== "idle"}
							variant={"ghost"}
							className="md:size-8"
							size={"icon"}
						>
							<EllipsisVertical />
						</Button>
					</PopoverTrigger>
					<PomodoroCardPopoverSettings />
				</Popover>
			</div>
			<Card className="p-0 overflow-hidden">
				{tabs.map((tab) => (
					<TabsContent value={tab.value} key={tab.id}>
						{tab.component}
					</TabsContent>
				))}
			</Card>
		</Tabs>
	);
}
