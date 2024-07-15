"use client";

import { MutableRefObject, useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";
import { ResizeHandle } from "@main/components/Templates/Base/ResizeHandle";
import { NotesByCategory } from "@main/features/NotesByCategory";
import { NotesByTag } from "@main/features/NotesByTag";
import { Categories } from "@main/features/Categories";
import { Tabs } from "@main/components";
import { Search } from "@main/features/Search";
import { Tags } from "@main/features/Tags";
import { sidebarTabs } from "./constants";

export default function SidebarPanel({ panelRef }: { panelRef: MutableRefObject<any> }): JSX.Element {

    const [activeSidebarTabIndex, setActiveSidebarTabIndex] = useState<number>(0);

    const onSidebarTabChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);
        if (activeSidebarTabIndex !== index) {
            setActiveSidebarTabIndex(index);
        }
    };

    return (
        <Panel className={"panel"}
            collapsible={true}
            order={1}
            minSize={15}
            defaultSize={15}
            ref={panelRef}
        >
            <Tabs className="sidebar" tabs={sidebarTabs} activeTab={activeSidebarTabIndex} onTabChange={onSidebarTabChange} />

            {activeSidebarTabIndex === 0 && <PanelGroup autoSaveId="example-2" direction="horizontal">
                <Panel className="panel has-controls" collapsible={true} order={1} defaultSize={30}>
                    <Categories />
                </Panel>
                <ResizeHandle />
                <Panel className="panel has-controls" collapsible={true} order={2} defaultSize={70}>
                    <NotesByCategory />
                </Panel>
            </PanelGroup>}

            {activeSidebarTabIndex === 1 && <PanelGroup
                autoSaveId="example-2" direction="horizontal">
                <Panel className="panel has-controls" collapsible={true} order={1} defaultSize={30}>
                    <Tags />
                </Panel>
                <ResizeHandle />
                <Panel className="panel has-controls" collapsible={true} order={2} defaultSize={70}>
                    <NotesByTag />
                </Panel>
            </PanelGroup>}

            {activeSidebarTabIndex === 2 && <PanelGroup
                autoSaveId="example-2" direction="horizontal">
                <Panel className="panel" collapsible={true} order={1} defaultSize={100}>
                    <Search />
                </Panel>
            </PanelGroup>}
        </Panel>
    )
}