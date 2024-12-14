import { Tstatuses } from "@/data/statuses"

export type ProjectProps = {
    status: Tstatuses
    name: string
    version: ['Public' | 'Private', string]
    tags: string[]
    members: number
}