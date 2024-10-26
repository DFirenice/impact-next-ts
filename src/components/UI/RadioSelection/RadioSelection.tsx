'use client'

import { useState } from 'react'

import Heading from '@/components/Heading'
import Icon from '@/components/UI/Icon'

import type { props } from './RadioSelection.types'
import css from './styles.module.css'

const RadioSelection = ({ options, name, direction = 'row', setSelection }: props) => {
    const [ checkedOption, setCheckedOption ] = useState<string>(options[0].value)

    const handleClick = (idx: number) => () => {
        setCheckedOption(options[idx].value)
        setSelection(options[idx].value)
    }
    
    return <div className={css.container} style={{ flexDirection: direction }}>
        {options.map(({ value, snippet, icon }, idx) => {
            return <label key={`${name}_${value}_${snippet}`} onClick={handleClick(idx)}>
                <input
                    className={css.checkbox}
                    checked={checkedOption == value}
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