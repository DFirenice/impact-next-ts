import { useState, useCallback } from "react"
import type { ProjectProps } from "@app-types/Project.types"

const useTagsFilter = () => {
    // All i know is I somewhere messed up with refreshing and props passing
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    console.log(selectedTags)

    const toggleTag = useCallback((tag: string) => {
        const lowerCaseTag = tag.toLowerCase()
        setSelectedTags(prevTags =>
            prevTags.includes(lowerCaseTag)
                ? prevTags.filter(t => t !== lowerCaseTag)
                : [...prevTags, lowerCaseTag]
        )
    }, [])

    const applyTags = useCallback((projects: ProjectProps[]) => {
        if (selectedTags.length === 0) {
            return projects // Return all projects if no tags are selected
        }
        return projects.filter(project =>
            selectedTags.some(tag => project.tags.map(t => t.toLowerCase()).includes(tag))
        )
    }, [selectedTags])

    return { selectedTags, toggleTag, applyTags }
}

export default useTagsFilter