import Heading from '@/components/Heading'
import Icon from '../UI/Icon'

import type { NotFoundProps } from './NotFound.types'
import './NotFound.css'

const NotFound = ({
    heading = "404, Not Found",
    subtext = "Check if page exists or being public...",
    icon = "broken_link"
}: NotFoundProps) => {
    return <section>
        <div><Icon size="large" id={icon}/></div>
        <div>
            <Heading size="larger"><span data-font-accent="medium">{heading}</span></Heading>
            <p data-font-accent="medium">{subtext}</p>
        </div>
    </section>
}

export default NotFound