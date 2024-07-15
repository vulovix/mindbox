import { Input, Tabs } from "@main/components";
import { controls } from "./constants";
import { useState } from "react";

interface ControlProps {
    onCreate(body: { title: string, content: '' }): void;
}

export function Controls(props: ControlProps): JSX.Element {
    const { onCreate } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [value, setValue] = useState('');

    const onChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);
        setActiveIndex(index);
        onCreate({ title: 'New note', content: '', });
    };

    return <>
        <Tabs tabs={controls} activeTab={0} onTabChange={onChange} />
    </>
}