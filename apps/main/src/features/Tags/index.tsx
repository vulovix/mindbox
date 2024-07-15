import { List } from "@main/components";
import { Controls } from "./Controls";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { RiHashtag } from "react-icons/ri";

export function Tags(): JSX.Element {
    const [data, setData] = useState<Array<{ id: number, name: string }>>([]);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const selectedTag = searchParams.get('tag') || "";

    useEffect(() => {
        fetch('/api/tags', { method: "GET" }).then(response => response.json()).then(setData);
    }, []);

    const onCreate = (tag: { name: string }): void => {
        fetch('/api/tags', { method: "POST", body: JSON.stringify(tag) }).then(response => response.json()).then((tag: { id: number, name: string }) => setData([tag, ...data]));
    }

    const onSelectTag = (e: React.MouseEvent<HTMLLIElement>): void => {
        let tag = `?tag=${e.currentTarget.id}`;
        if (e.currentTarget.id === selectedTag) {
            tag = '';
        }
        router.replace(`${pathname}${tag}`);
    }

    const list = useMemo((): Array<{ id: string, label: string, icon: React.FC<any> }> => data.map((record) => ({ id: record.id.toString(), label: record.name, icon: RiHashtag })), [data]);
    return <div className={"panel-content"}>
        <List active={selectedTag} data={list} onItemClick={onSelectTag} />
        <div className="panel-footer">
            <Controls onCreate={onCreate} />
        </div>
    </div>
}