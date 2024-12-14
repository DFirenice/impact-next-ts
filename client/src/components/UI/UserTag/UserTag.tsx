import Avatar from "@/components/UI/Avatar/Avatar"
import Heading from "@/components/Heading"

import type UserTagProps from './UserTag.types'
import css from './styles.module.css'

const UserTag = ({ avatar, tag, func }: UserTagProps) => {
    return (
        <div className={css.container} onClick={func}>
            <Avatar size="small" src="/images/avatar.png"/>
            <span className={css.fullname}>
                <Heading level={4}>Fullname</Heading>
            </span>
            <span className={css.userTag}>{`@${tag}`}</span>
        </div>
    )
}

export default UserTag