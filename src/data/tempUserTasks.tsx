import type TaskCardProps from "@/components/TaskCard/TaskCard.types"

const tempUserTasks: TaskCardProps[] = [
    {
        priority: 'high',
        tags: ['bug', 'backend'],
        heading: 'JWT invalid generation',
        body: 'Fix the way it generates',
        time: {
            starts: 'Sep 14',
            ends: 'Sep 26'
        },
        associates: ["users' id"]
    },
    {
        priority: 'low',
        tags: ['backend'],
        heading: 'Make comments',
        body: 'Some bla bla description',
        time: {
            starts: 'Sep 10',
            ends: 'Oct 3'
        },
        associates: ["users' id"]
    },
    {
        priority: 'low',
        tags: ['design', 'bug'],
        heading: 'Fix Context Modal',
        body: 'It has bad visibility and contrast',
        time: {
            starts: 'Sep 14',
            ends: 'Sep 17'
        },
        associates: ["users' id"]
    },
    {
        priority: 'medium',
        tags: ['frontend', 'ui'],
        heading: 'Remove data cashing',
        body: 'In blablaHook, get rid of cashing',
        time: {
            starts: 'Sep 5',
            ends: 'Sep 15'
        },
        associates: ["users' id"]
    },
    {
        priority: 'completed',
        tags: ['frontend'],
        heading: 'User Assignment Cards',
        body: 'Complete making layout of user tasks',
        time: {
            starts: 'Sep 1',
            ends: 'Sep 3'
        },
        associates: ["users' id"]
    },
]

export default tempUserTasks