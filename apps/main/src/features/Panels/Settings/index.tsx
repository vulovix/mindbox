"use client";

import { Tabs } from "@main/components";
import { MutableRefObject, useState } from "react";
import { Panel } from "react-resizable-panels";
import { tabs } from "./constants";

export default function SettingsPanel({ panelRef }: { panelRef: MutableRefObject<any> }): JSX.Element {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const onTabChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);

        if (activeTabIndex !== index) {
            setActiveTabIndex(index);
        }
    };

    return (
        <Panel className="panel" collapsible={true} defaultSize={15} minSize={15} order={3} ref={panelRef}>
            <Tabs className="settings" tabs={tabs} activeTab={activeTabIndex} onTabChange={onTabChange} />
            <div className={"panel-content"}>fourth</div>
        </Panel>
    )
}