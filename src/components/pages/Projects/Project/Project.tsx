import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'

import type { ProjectProps } from './Project.types'
import css from './Project.module.css'

const Project = (
    { status,
        name,
        version,
        members
    }: ProjectProps) => {
    return <div className={css.container}>
        <div className={css.info}>
            <div className={css.info_name}>
                <span>{name}</span>
            </div>
            <div>
                <span>{version[0]}</span>
                <span data-font-accent="medium">{version[1]}</span>
            </div>
            <div>
                <span>{members === 1 ? 'Only You' : `${members} Members`}</span>
            </div>
        </div>
        {/* Controls */}
            {/* Menu */}
        <Btn classes="btn-none">
            <Icon id="options" style={{rotate: '90deg'}}/>
        </Btn>
    </div>
}

export default Project