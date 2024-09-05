'use client'

import { useState } from 'react'
import Icon from '@/components/UI/Icon'

import { TagProps } from './Tag.types'
import './Tag.css'

const Tag = ({ children, classes = 'tag-empty', func }: TagProps) => {
    const [ isActive, setActive ] = useState<boolean>(false)

    const handleClick = () => {
        if (func) {
            setActive(prev => !prev)
            // Basically operates outer funcs like sorting
            // to affect some final result
            func()
        }
    }
    
    return <div onClick={handleClick}
        {...(func && { 'data-cursor': "pointer" })}
        className={`tag ${classes && !isActive ? classes : 'tag-light'}`.trim()}
    >
        <span>
            {children}
            {/* temporary icon: broken_link */}
            {isActive && <div><Icon size="small" id="broken_link"/></div>}
        </span>
    </div>
}

export default Tag