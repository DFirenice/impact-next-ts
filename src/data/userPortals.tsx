import { Ticons } from '@app-types/icons'

type userPortals = {
    title: string
    subtext: string
    icon?: Ticons
    link?: string
    func?: () => void
}[]

export const userPortals: userPortals = [
    {
        title: "All Chats & Groups",
        subtext: "Your private chats & projects' groups",
        icon: "chats",
        link: "/chats"
    },
    {
        title: "Create new...",
        subtext: "Project, Group or maybe even an entire universe?",
        icon: "plus",
        func: () => { console.log('Portal Clicked') }
    },
    {
        title: "Tasks & Planner",
        subtext: "See your assignments and start planning future",
        icon: "calendar",
        link: "/planner"
    },
    {
        title: "Last updates & commits",
        subtext: "Project G, Project X have recent changes!",
        icon: "nodes",
        link: "/projects"
    },
    {
        title: "View Projects",
        subtext: "Manage your active projects",
        icon: "folder",
        link: "/projets/common"
    },
    {
        title: "View Archive",
        subtext: "View your archived projects",
        icon: "archive",
        link: "/projects/archive"
    },
    {
        title: "Create new sandbox",
        subtext: "Test new features withing experimental sandboxes!",
        icon: "collection"
    },
    {
        title: "Settings & Account",
        subtext: "Manage account and customize Impact as you wish!",
        icon: "gear",
        link: "/profile/settings"
    },
]