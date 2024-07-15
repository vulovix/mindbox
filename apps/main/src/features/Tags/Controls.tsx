import { Input, Tabs } from "@main/components";
import { controls } from "./constants";
import { useState } from "react";

interface ControlProps {
    onCreate(body: { name: string }): void;
}

export function Controls(props: ControlProps): JSX.Element {
    const { onCreate } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [value, setValue] = useState('');

    const onChange = (e: React.MouseEvent<HTMLDivElement>) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);

        if (activeIndex !== index) {
            setActiveIndex(index);
        }
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter" && value?.trim()) {
            onCreate({ name: value });
            setValue('');
        }
    }
    const onTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <>
        <Input value={value} onChange={onTagChange} placeholder="Tag name" onKeyDown={onKeyDown} />
        <Tabs tabs={controls} activeTab={0} onTabChange={onChange} />
    </>
}