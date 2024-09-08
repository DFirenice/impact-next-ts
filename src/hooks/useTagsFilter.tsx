import { useState } from "react"

import type { ProjectProps } from "@/types/Project.types"

export const useTagsFilter = () => {
    const [ tagsList, setTagsList ] = useState<string[]>([])
    
    // Apply Tag Filter
    const applyTags = (projects: ProjectProps[]) => {
        const filteredByTags = projects.filter(project => {
            const projectLowerCaseTags = project.tags.map(tag => tag.toLowerCase())
            return tagsList.every(tag => projectLowerCaseTags.includes(tag))
        })

        return filteredByTags
    }

    // Remove / add tags
    const toggleTag = (toggleTag: string) => {
        if (tagsList.some(tag => tag.toLowerCase() === toggleTag.toLowerCase())) {
            const clearedTagsList = tagsList.filter(tag => tag !== toggleTag)
            setTagsList(clearedTagsList)
        } else { setTagsList(prev => [...prev, toggleTag]) }
    }

    return { applyTags, toggleTag, tagsList }
}