"use client";

import { PropsWithChildren, useRef, useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import { Button } from "@main/components";
import { ResizeHandle } from "./ResizeHandle";
import SidebarPanel from "@main/features/Panels/Sidebar";
import { RiEditLine, RiSideBarLine, RiSidebarFoldLine, RiSidebarUnfoldLine } from "react-icons/ri";
import MainPanel from "@main/features/Panels/Main";
import SettingsPanel from "@main/features/Panels/Settings";
import "./styles.scss";
import Script from "next/script";

const BaseTemplate = (props: PropsWithChildren<unknown>) => {

  const sidebarRef = useRef<any>(null);
  const settingsRef = useRef<any>(null);

  const onSidebarVisibilityToggle = () => {
    if (sidebarRef.current) {
      if (sidebarRef.current.isExpanded()) {
        return sidebarRef.current.collapse();
      }
      return sidebarRef.current.expand();
    }
  }

  const onSettingsVisibilityToggle = () => {
    if (settingsRef.current) {
      if (settingsRef.current.isExpanded()) {
        return settingsRef.current.collapse();
      }
      return settingsRef.current.expand();
    }
  }

  return <div className={"base-template-container"}>
    <div className={"bottom-row"}>
      <PanelGroup autoSaveId="example" direction="horizontal">
        <SidebarPanel panelRef={sidebarRef} />
        <ResizeHandle />
        <MainPanel
          headerControlsLeft={
            <Button className="header-control" onClick={onSidebarVisibilityToggle}>
              <RiSideBarLine style={{ transform: "rotate(180deg)" }} />
            </Button>
          }
          headerControlsRight={
            <Button className="header-control" onClick={onSettingsVisibilityToggle}>
              <RiSideBarLine />
            </Button>
          }
        >
          {props.children}
        </MainPanel>
        <ResizeHandle />
        <SettingsPanel panelRef={settingsRef} />
      </PanelGroup>
    </div>
  </div>
};

export { BaseTemplate };
