import type { TagTypes } from "@/types/TagType.types"

type TaskCardProps = {
    priority: 'low' | 'medium' | 'high' | 'completed'
    tags: TagTypes[]
}

export default TaskCardProps