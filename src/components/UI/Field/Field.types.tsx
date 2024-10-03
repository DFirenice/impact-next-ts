import { Ticons } from "@/types/icons"

export type FieldProps = {
    text: string
    type?: string
    icon?: Ticons | [Ticons, 'small' | 'normal' | 'large']
    focused?: boolean
    order?: 'icon-field' | 'field-icon'
    func?: () => void
}

export type IconSize = 'small' | 'normal' | 'large'