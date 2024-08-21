export type FieldProps = {
    text: string
    type?: string
    icon?: string | [string, 'small' | 'normal' | 'large']
    focused?: boolean
    order?: 'icon-field' | 'field-icon'
    func?: () => void
}

export type IconSize = 'small' | 'normal' | 'large'