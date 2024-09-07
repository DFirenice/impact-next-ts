'use client'

import useTagsFilter from '@/hooks/useTagsFilter'
import Icon from '@/components/UI/Icon'

import { TagProps } from './Tag.types'
import './Tag.css'

const Tag = ({ children, classes = 'tag-empty'}: TagProps) => {
    const { selectedTags, toggleTag } = useTagsFilter()

    const isActive = selectedTags.includes(children.toLowerCase())

    const handleClick = () => {
        if (children !== '...') {
            toggleTag(children)
        }
    }

    return (
        <div 
            onClick={handleClick}
            // {...(!isStatic && { 'data-cursor': "pointer" })}
            className={`tag ${isActive ? 'tag-light' : classes}`.trim()}
        >
            <span>
                {children}
                <div>{isActive && <Icon size="small" id="broken_link"/>}</div>
            </span>
        </div>
    )
}

export default Tag