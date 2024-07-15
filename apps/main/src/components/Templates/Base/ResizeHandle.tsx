import { PanelResizeHandle } from "react-resizable-panels";

export function ResizeHandle({
  className = "",
  id
}: {
  className?: string;
  id?: string;
}) {
  return (
    <PanelResizeHandle
      className={`resize-handle-outer ${className}`}
      id={id}
    >
      <div className={"resize-handle-inner"}>
        {/* <svg className={"icon"} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fillOpacity={0.25}
            d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
          />
        </svg> */}
      </div>
    </PanelResizeHandle>
  );
}
