import { List } from "@main/components";
import { Controls } from "./Controls";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { RiStickyNoteLine } from "react-icons/ri";

export function NotesByCategory(): JSX.Element {
    const [data, setData] = useState<Array<{ id: number, title: string, content: string }>>([]);

    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get('category') || "-1";

    useEffect(() => {
        const category = parseInt(selectedCategory);
        if (category && category > 0) {
            fetch(`/api/notes?category=${category}`, { method: "GET" }).then(response => response.json()).then(setData);
        }
    }, [searchParams]);

    const navigateToNote = (noteId: number | string) => {
        router.replace(`/workspace/notes/${noteId}?${searchParams.toString()}`);
    }

    const onSelectNote = (e: React.MouseEvent<HTMLLIElement>): void => {
        navigateToNote(e.currentTarget.id)
    }

    const onCreate = (note: { title: string, content: string }): void => {
        const category = parseInt(selectedCategory);

        if (category && category > 0) {
            fetch('/api/notes', {
                method: "POST", body: JSON.stringify({
                    ...note,
                    categoryId: selectedCategory ? parseInt(selectedCategory, 10) : undefined
                })
            }).then(response => response.json()).then((note: { id: number, title: string, content: string }) => {
                setData([note, ...data]);
                navigateToNote(note.id);
            });
        }
    }

    const list = useMemo((): Array<{ id: string, label: string, icon: React.FC<any> }> => data.map((record) => ({ id: record.id.toString(), label: record.title, icon: RiStickyNoteLine })), [data]);

    return <div className={"panel-content"}>
        <List onItemClick={onSelectNote} active={params.id ? params.id.toString() : null} data={list} />
        {parseInt(selectedCategory) && parseInt(selectedCategory) > 0 && <div className="panel-footer">
            <Controls onCreate={onCreate} />
        </div>}
    </div>
}