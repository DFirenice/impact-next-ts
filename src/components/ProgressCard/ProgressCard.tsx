import Heading from '@/components/Heading'

import type { HeadingSizes } from '@/types/Heading.types'
import css from './ProgressCard.module.css'

type ProgressCardProps = {
    value: number | string
    size?: HeadingSizes
    subtext?: string
}

const ProgressCard = ({ value, size = 'larger', subtext }: ProgressCardProps) => {
    return <div className={css.container}>
        <Heading size={size}>{value}</Heading>
        { subtext && <span data-font-accent="medium">{subtext}</span> }
    </div>
}

export default ProgressCard