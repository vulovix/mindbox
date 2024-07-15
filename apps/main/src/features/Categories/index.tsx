import { List } from "@main/components";
import { Controls } from "./Controls";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sidebarMainLinks } from "./constants";
import { useEffect, useMemo, useState } from "react";
import { RiFolderLine } from "react-icons/ri";

export function Categories(): JSX.Element {
    const [data, setData] = useState<Array<{ id: number, name: string }>>([]);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get('category') || "-1";

    useEffect(() => {
        fetch('/api/categories', { method: "GET" }).then(response => response.json()).then(setData);
    }, []);

    const onCreate = (tag: { name: string }): void => {
        fetch('/api/categories', { method: "POST", body: JSON.stringify(tag) }).then(response => response.json()).then((tag: { id: number, name: string }) => setData([tag, ...data]));
    }

    const onSelectCategory = (e: React.MouseEvent<HTMLLIElement>): void => {
        let category = `?category=${e.currentTarget.id}`;
        if (e.currentTarget.id === selectedCategory) {
            category = '';
        }
        router.replace(`${pathname}${category}`);
    }

    const list = useMemo((): Array<{ id: string, label: string, icon: React.FC<any> }> => data.map((record) => ({ id: record.id.toString(), label: record.name, icon: RiFolderLine })), [data]);

    return <div className={"panel-content"}>
        <List active={selectedCategory} data={sidebarMainLinks} onItemClick={onSelectCategory} />
        <hr />
        <List active={selectedCategory} data={list} onItemClick={onSelectCategory} />
        <div className="panel-footer">
            <Controls onCreate={onCreate} />
        </div>
    </div>
}