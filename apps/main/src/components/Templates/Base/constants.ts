import { RiFilePaperLine, RiFolder2Line, RiFolderCloseLine, RiFolderLine, RiFolderOpenLine, RiHashtag, RiHome2Line, RiSearch2Line, RiStarSLine, RiStickyNoteLine } from "react-icons/ri";
import { LuListX } from "react-icons/lu";

export const sidebarTabs = [{
    icon: RiHome2Line,
    // label: 'Overview'
}, {
    icon: RiHashtag,
    // label: 'Tags'
}, {
    icon: RiSearch2Line,
    // label: 'Search'
}];
export const mainTabs = [{
    // icon: RiStickyNoteLine,
    label: 'Hello.md'
}];
export const settingsTabs = [{
    label: 'Writing'
}];

export const sidebarMainLinks = [
    { id: 1, icon: RiStarSLine, label: 'Favorites', url: '/categories/favorites' },
    { id: 2, icon: RiFolderCloseLine, label: 'Uncategorized', url: 'categories/uncategorized' },
]

export const sidebarDemoCategories = [
    { id: 1, icon: RiFolderLine, label: 'Music', url: '/music' },
    { id: 2, icon: RiFolderLine, label: 'Programming', url: '/programming' },
]

export const demoNotes = [
    { id: 1, icon: RiStickyNoteLine, label: 'How to be the best?', url: '/how-to-be-the-best' },
    { id: 2, icon: RiStickyNoteLine, label: 'How to become a millionaire', url: '/how-to-become-a-millionaire' },
    { id: 11, icon: RiStickyNoteLine, label: 'Learn JavaScript Frameworks', url: '/random-note-1' },
    { id: 12, icon: RiStickyNoteLine, label: 'Travel the World on a Budget', url: '/random-note-2' },
    { id: 13, icon: RiStickyNoteLine, label: 'Master Cooking Techniques', url: '/random-note-3' },
    { id: 14, icon: RiStickyNoteLine, label: 'Effective Time Management Tips', url: '/random-note-4' },
    { id: 15, icon: RiStickyNoteLine, label: 'Start Your Own Business', url: '/random-note-5' },
    { id: 16, icon: RiStickyNoteLine, label: 'Fitness and Wellness Strategies', url: '/random-note-6' },
    { id: 17, icon: RiStickyNoteLine, label: 'Learn a New Language Quickly', url: '/random-note-7' },
    { id: 18, icon: RiStickyNoteLine, label: 'Investing for Beginners', url: '/random-note-8' },
    { id: 19, icon: RiStickyNoteLine, label: 'Art and Creativity Workshops', url: '/random-note-9' },
    { id: 20, icon: RiStickyNoteLine, label: 'Digital Marketing Strategies', url: '/random-note-10' }
]

export const demoTags = [
    { id: 1, icon: RiHashtag, label: 'Programming', url: '/tags/programming' },
    { id: 2, icon: RiHashtag, label: 'React', url: '/tags/react' },
]