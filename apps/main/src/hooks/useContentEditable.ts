import { useMemo } from "react";

export function useContentEditable(onChange?: (e: any) => void, onSave?: () => void) {

    const contentEditableProps = useMemo(() => {
        if (!onChange) {
            return ({});
        }
        return ({
            contentEditable: true,
            suppressContentEditableWarning: true,
            onInput: onChange,
            onKeyDown: (e: any): void => {
                if ((e.ctrlKey || e.metaKey) && e.key === "s") {
                    e.preventDefault();
                    onSave?.();
                }
                if ((e.ctrlKey || e.metaKey) && e.key === "z") {
                    e.preventDefault();
                }
            },
            onBlur: onSave,
        })
    }, [onChange])

    return contentEditableProps;
}