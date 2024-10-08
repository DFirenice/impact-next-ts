import type { TagTypes } from "@/types/TagType.types"

type TaskCardProps = {
    priority: 'low' | 'medium' | 'high' | 'completed'
    tags: TagTypes[]
    heading: string
    body: string,
    time: { starts: string, ends: string }
    associates: string[]
    id: string
}

export default TaskCardProps