import { statuses } from '@/data/statuses'

import type { IndicatorProps } from './Indicator.types'
import css from './Indicator.module.css'

const Indicator = ({ status = 'dev' }: IndicatorProps) => {
    return (
        <div className={css.indicator}
            style={{ background: statuses[status].color }}
            data-indicator-tip={statuses[status].label}
        >
        </div>
    )
}

export default Indicator