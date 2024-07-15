import { Input } from "@main/components";

export function Search(): JSX.Element {
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
    }

    return <div className={"panel-content"}>
        <Input className="search-input" type="search" placeholder="Search" onChange={onSearchChange} />
    </div>
}