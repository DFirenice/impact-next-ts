import Heading from '@/components/Heading'
import Icon from '@/components/UI/Icon'

import type { props } from './RadioSelection.types'
import css from './styles.module.css'

const RadioSelection = ({ options, name, direction = 'row' }: props) => {
    return <div className={css.container} style={{ flexDirection: direction }}>
        {options.map(({ value, snippet, icon }) => {
            return <label key={`${name}_${value}_${snippet}`}>
                <input
                    type='radio'
                    name={name}
                />
                <div className={css.data}>
                    { icon && <Icon id={icon} size='large'/> }
                    <div>
                        <Heading>{value}</Heading>
                        { snippet && (
                            <span data-font-accent="medium">
                                {snippet}
                            </span>
                        ) }
                    </div>
                </div>
            </label>
        })}
    </div>
}

export default RadioSelection