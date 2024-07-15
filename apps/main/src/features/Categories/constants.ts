import { RiBookmark3Line, RiFolderCloseLine, RiFolderLine, RiFolderSharedLine, RiStickyNoteLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";

export const sidebarMainLinks = [
    { id: "-1", icon: RiFolderCloseLine, label: 'Uncategorized' },
    { id: "-2", icon: RiBookmark3Line, label: 'Favorites' },
    { id: "-3", icon: RiFolderSharedLine, label: 'Shared' },
]

export const controls = [
    {
        icon: RiAddLine,
        // label: 'Overview'
    }
]