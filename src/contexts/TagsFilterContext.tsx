'use client'

import { createContext, useContext, useState } from 'react'

type TTagsFilterContext = {
    tagsList: string[]
    setTagsList: (newTagsList: string[]) => void
}

const TagsFilterContext = createContext<TTagsFilterContext | undefined>(undefined)

// Context provider
export const TagsFilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [ tagsList, setTagsList ] = useState<string[]>([])
    return <TagsFilterContext.Provider value={{ tagsList, setTagsList }}>
        {children}
    </TagsFilterContext.Provider>
}

// Use context hook
export const useTagsFilter = () => {
    const context = useContext(TagsFilterContext)
    
    if (!context) {
        throw new Error('useTagsFilter must be used withing TagsFilterProvider')
    }

    return context
}