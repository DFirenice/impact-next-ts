'use client'

import Icon from '@/components/UI/Icon'

import { TagProps } from './Tag.types'
import './Tag.css'

const Tag = ({ children, classes = 'tag-empty'}: TagProps) => {
    return (
        <div 
            // {...(!isStatic && { 'data-cursor': "pointer" })}
            // className={`tag ${isActive ? 'tag-light' : classes}`.trim()}
            className={`tag ${classes}`.trim()}
        >
            <span>
                {children}
                {/* <div>{isActive && <Icon size="small" id="broken_link"/>}</div> */}
            </span>
        </div>
    )
}

export default Tag