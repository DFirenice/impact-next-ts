import type TRadioSelectionOptions from "@/types/RadioSelectionOptions"

export type optionsValue = string

export type props = {
    options: TRadioSelectionOptions
    name: string
    direction?: 'column' | 'row'
    setSelection: (newOption: optionsValue) => void
}