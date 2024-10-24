import { Ticons } from "@/types/icons"

export type props = {
    options: {
        value: string
        snippet?: string
        icon?: Ticons
    }[]
    name: string
    direction?: 'column' | 'row'
}