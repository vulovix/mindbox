import { PropsWithChildren } from "react"
import { RiInformation2Fill } from "react-icons/ri";
import "./styles.scss";

export interface ListProps {
    data: { id: string, label: string, icon: React.FC<any> | undefined }[];
    active: string | null;
    className?: string;
    onItemClick?(e: React.MouseEvent<HTMLLIElement>): void;
}

export function List(props: PropsWithChildren<ListProps>): JSX.Element {
    const { className, data, onItemClick, active } = props;
    if (!data.length) {
        return <ul className={`list-container no-data-container ${className}`}>
            <li className={`list-item no-data`}>
                <RiInformation2Fill />
                <span>Looks like there is nothing to see here.</span>
            </li>
        </ul>
    }
    return (
        <ul className={`list-container ${className}`}>
            {data.map(item => {
                const Icon = item.icon;
                return (
                    <li key={item.id} id={item.id} className={`list-item list-link ${active === item.id ? 'active' : ''}`} onClick={onItemClick}>
                        {Icon ? <Icon className={`list-icon ${item.icon}`} /> : null}
                        <span>{item.label}</span>
                    </li>
                );
            })}
        </ul>
    );
}