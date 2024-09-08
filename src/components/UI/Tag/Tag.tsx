import { useState, useEffect } from 'react'
import { useTagsFilter } from '@/contexts/TagsFilterContext'

import { TagProps } from './Tag.types'
import './Tag.css'

const Tag = ({ children, classes = 'tag-empty'}: TagProps) => {
    const [ isActive, setActive ] = useState<boolean>(false)
    const { tagsList } = useTagsFilter()

    useEffect(() => {
        setActive(tagsList.some(tag => tag === children))
    }, [tagsList])
    
    return (
        <div
            data-cursor={isActive ? 'pointer' : 'normal'}
            className={`tag ${isActive ? 'tag-light' : classes}`.trim()}
        >
            <span>
                {children}
                {/* <div>{isActive && <Icon size="small" id="broken_link"/>}</div> */}
            </span>
        </div>
    )
}

export default Tag