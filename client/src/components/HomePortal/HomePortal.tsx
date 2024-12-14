'use client'

import Link from 'next/link'

import Heading from '@/components/Heading'
import Icon from '@/components/UI/Icon'
import HomePortalProps from './HomePortal.types'

import css from './HomePortal.module.css'
 
const HomePortal = ({ heading, subtext, icon, link, func }: HomePortalProps) => {
    const WrapperComponent: React.ElementType = link ? Link : 'div'
    return (
        <WrapperComponent
            className={css.portal}
            key={heading}
            {...(link ? { href: link } : {})}
            {...(func ? { onClick: func } : {})}
        >
        <Heading level={3}>
            <Icon size="large" id={icon}/>
            {heading}
        </Heading>
        <span data-font-accent="medium">{subtext}</span>
    </WrapperComponent>
    )
}

export default HomePortal