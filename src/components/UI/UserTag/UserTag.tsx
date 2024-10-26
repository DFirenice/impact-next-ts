import Avatar from "@/components/UI/Avatar/Avatar"
import Heading from "@/components/Heading"

import type UserTagProps from './UserTag.types'
import css from './styles.module.css'

const UserTag = ({ avatar, fullname, func }: UserTagProps) => {
    return (
        <div className={css.container} onClick={func}>
            <Avatar size="small" src="/images/avatar.png"/>
            <Heading>{fullname}</Heading>
        </div>
    )
}

export default UserTag