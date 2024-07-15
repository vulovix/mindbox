import { RiBookmark3Line, RiFolderCloseLine, RiFolderLine, RiFolderSharedLine, RiStickyNoteLine } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";

export const sidebarMainLinks = [
    { id: "0", icon: RiFolderCloseLine, label: 'Uncategorized' },
    { id: "1", icon: RiBookmark3Line, label: 'Favorites' },
    { id: "2", icon: RiFolderSharedLine, label: 'Shared' },
]

export const sidebarDemoCategories = [
    { id: "4", icon: RiFolderLine, label: 'Music' },
    { id: "5", icon: RiFolderLine, label: 'Programming' },
    { id: "6", icon: RiFolderLine, label: 'Empty' },
]

export const controls = [
    {
        icon: RiAddLine,
        // label: 'Overview'
    }
]