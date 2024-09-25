import { Ticons } from "./icons"

export type Ttabs = { branch: string, icon?: Ticons, tabName: string }[]

export type routingPanelProps = {
    path: string
    tabs: {
        branch: string
        icon?: Ticons
        tabName: string
    }[]
}