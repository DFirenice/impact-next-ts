import Heading from '@/components/Heading'
import Icon from '@/components/UI/Icon'

import type { Ticons } from '@/types/icons'
import type { BranchBtnProps } from './BranchBtn.types'
import css from './BranchBtn.module.css'
import Avatar from '../UI/Avatar/Avatar'

const BranchBtn = ({ icon, heading, subtext }: BranchBtnProps) => {
    return <div className={css.container}>
        {
            icon.charAt(0) !== '/'
                ? <Icon id={icon as Ticons} size="large"/>
                : <Avatar src={icon}/>
        }
        <div className={css.content}>
            <Heading size='large'>{heading}</Heading>
            { subtext && <span data-font-accent="medium">
                {subtext}
            </span> }
        </div>
    </div>
}

export default BranchBtn