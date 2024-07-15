import { PropsWithChildren } from "react"
import "./styles.scss";

export interface ButtonProps {
    className?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: PropsWithChildren<ButtonProps>): JSX.Element {
    const { className, children, ...rest } = props;
    return <button type="button" className={`button ${className}`} {...rest}>{children}</button>
}