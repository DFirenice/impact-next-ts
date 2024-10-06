import Heading from '@/components/Heading'
import Icon from '@/components/UI/Icon'

import type { BranchBtnProps } from './BranchBtn.types'
import css from './BranchBtn.module.css'

const BranchBtn = ({ icon, heading, subtext }: BranchBtnProps) => {
    return <div className={css.container}>
        <Icon id={icon} size="large"/>
        <div className={css.content}>
            <Heading size='large'>{heading}</Heading>
            { subtext && <span data-font-accent="medium">
                {subtext}
            </span> }
        </div>
    </div>
}

export default BranchBtn