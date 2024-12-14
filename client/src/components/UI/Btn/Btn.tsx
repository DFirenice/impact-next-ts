'use client'

import React from 'react'

import Link from 'next/link'
import Icon from '@/components/UI/Icon'

import type { BtnProps } from './Btn.types'
import './Btn.css'

const Btn = ({
    classes = 'btn-dark',
    func = () => {},
    link = undefined,
    children,
    ...rest
}:BtnProps) => {
    if ( React.isValidElement(children) ) {
        if (children.type === Icon) {
            classes += ' btn-icon-only '
        }
    }
    
    if (link) {
        return (
            <Link
                href={link}
                role='button'
                onClick={() => {func}}
                className={`btn ${classes}`.trim()}
            >
                {children}
            </Link>
        )
    }
    
    return (
        <button className={`btn ${classes}`.trim()} onClick={func} {...rest}>
            {children}
        </button>
    )
}

export default Btn