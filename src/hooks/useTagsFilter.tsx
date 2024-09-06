import { useState } from "react"
import type { ProjectProps } from "@app-types/Project.types"

const useTagsFilter = () => {
    const [ tagsList, setTagsList ] = useState<string[]>([])

    const applyTags = (tags: string[], predicate: ProjectProps[]) => {
        tags.map(tag => tag.toLowerCase())
        
        if (tagsList.length === 0) {
            return predicate
        }
        
        return predicate.filter(project => {
            return tagsList.some(tag => project.tags.includes(tag))
        })
    }
    
    const setTags = (newTagsList: string[]) => { setTagsList(newTagsList) }
    const getTagsList = () => { return tagsList }

    return { applyTags, setTags, getTagsList }
}

export default useTagsFilter