import type { ProjectProps } from "@app-types/Project.types"

const userProjects: ProjectProps[] = [
    {
        status: 'Delayed',
        name: 'Project X',
        version: ['Public', 'v9.01'],
        members: 1
    },
    {
        status: 'Production',
        name: 'Ray Cast',
        version: ['Private', 'v1.12.2'],
        members: 3
    },
    {
        status: 'Development',
        name: 'Test',
        version: ['Private', 'v0.1'],
        members: 2
    },
]

export default userProjects