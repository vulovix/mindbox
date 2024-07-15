"use client";

import { PropsWithChildren, useMemo, useState } from "react";
import { Panel } from "react-resizable-panels";

export interface MainPanelProps {
    headerControlsLeft: React.ReactNode;
    headerControlsRight: React.ReactNode;
}
export default function MainPanel(props: PropsWithChildren<MainPanelProps>): JSX.Element {
    return (
        <Panel className="panel" collapsible={false} order={2} defaultSize={50}>
            <div className="tabs main">
                {props.headerControlsLeft}
                {props.headerControlsRight}
            </div>
            <div className={"panel-content"}>
                {props.children}
            </div>
        </Panel>
    )
}