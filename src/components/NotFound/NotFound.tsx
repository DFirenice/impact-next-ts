import Heading from '@/components/Heading'
import Icon from '../UI/Icon'

import type { NotFoundProps } from './NotFound.types'
import css from './NotFound.module.css'

const NotFound = ({
    heading = "404, Not Found",
    subtext = "Check if page exists or being public...",
    icon = "broken_link"
}: NotFoundProps) => {
    return <section className={css.not_found}>
        <div className={css.wrapper}>
            <div className={css.image}><Icon size="large" id={icon}/></div>
            <div>
                <Heading size="large"><span data-font-accent="low">{heading}</span></Heading>
                <p data-font-accent="low">{subtext}</p>
            </div>
        </div>
    </section>
}

export default NotFound