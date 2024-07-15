import { Tabs } from "@main/components";
import { controls } from "./constants";
import { useState } from "react";

export function Controls(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);
    const onChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);

        if (activeIndex !== index) {
            setActiveIndex(index);
        }
    };

    return <Tabs tabs={controls} activeTab={0} onTabChange={onChange} />
}