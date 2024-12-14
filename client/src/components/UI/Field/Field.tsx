'use client'

import { forwardRef } from 'react'
import { FieldProps, IconSize } from './Field.types'
import type { Ticons } from '@/types/icons'
import Icon from '@/components/UI/Icon'
import Btn from '@/components/UI/Btn/Btn'

import css from './Field.module.css'

const Field = forwardRef<HTMLInputElement, FieldProps>((
    {
        text,
        icon = undefined,
        type = 'text',
        focused = false,
        order = 'icon-field',
        func = undefined,
        keyDownFunc = undefined,
        state = undefined
    },
    ref
) => {
    const [ value, setValue ] = state || ['', () => {}]

    let iconId:string | undefined = `${icon}`,
        iconSize:'small' | 'normal' | 'large' = 'normal'

    if (Array.isArray(icon)) {
        iconId = icon[0]
        iconSize = icon[1] as IconSize
    }

    return <div className={`${css.field} field`}>
        {icon && <Btn classes="btn-none" {...(func ? {func: func} : {disabled: true})}>
                <Icon id={iconId as Ticons} size={iconSize}/>
            </Btn>}
        <input
            ref={ref}
            style={
                (order === 'field-icon' && icon)
                    ? {order: '-1'}
                    : undefined
                }
            type={type}
            placeholder={text}
            autoFocus={focused}
            {...(state && {value: value})}
            {...(state && {onChange: (e) => setValue(e.target.value.trim())})}
            {...(keyDownFunc && {onKeyDown: e => {
                // Not how it should work
                // REFACTORING REQUIRED
                state && setValue(e.target.value.trim())
                keyDownFunc(e)
            }})}
        />
    </div>
})

// debug
Field.displayName = 'Field'

export default Field