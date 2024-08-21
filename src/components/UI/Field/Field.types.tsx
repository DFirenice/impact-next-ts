import { RefObject } from "react"

export type FieldProps = {
    text: string
    type?: string
    icon?: string | [string, 'small' | 'normal' | 'large']
    focused?: boolean
    order?: 'icon-field' | 'field-icon'
}

export type IconSize = 'small' | 'normal' | 'large'