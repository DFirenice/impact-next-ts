'use client'

import { forwardRef } from 'react'
import { FieldProps, IconSize } from './Field.types'
import Icon from '@/components/UI/Icon'
import css from './Field.module.css'

const Field = forwardRef<HTMLInputElement, FieldProps>((
    {
        text,
        icon = undefined,
        type = 'text',
        focused = false,
        order = 'icon-field'
    },
    ref
) => {
    let iconId:string | undefined = `${icon}`,
        iconSize:'small' | 'normal' | 'large' = 'normal'

    if (Array.isArray(icon)) {
        iconId = icon[0]
        iconSize = icon[1] as IconSize
    }

    return <div className={css.field}>
        { icon && <Icon id={iconId} size={iconSize}/> }
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
        />
    </div>
})

export default Field