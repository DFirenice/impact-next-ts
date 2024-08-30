export type ProjectProps = {
    status: 'Delayed' | 'Production' | 'Development' // Key of custom user's statuses later
    name: string
    version: ['Public' | 'Private', string]
    members: number
}