'use client'

import type { BtnProps } from './Btn.types'
import Link from 'next/link'
import './Btn.css'

const Btn = ({
    classes = 'btn-dark',
    func = () => {},
    link = undefined,
    children,
    ...rest
}:BtnProps) => {
    if (children?.props?.id) { classes += ' btn-icon-only ' }
    
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