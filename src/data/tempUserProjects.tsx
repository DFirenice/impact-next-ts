import type { ProjectProps } from "@app-types/Project.types"

const userProjects: ProjectProps[] = [
    {
        status: 'dev',
        name: 'Project X',
        version: ['Public', 'v9.01'],
        members: 1
    },
    {
        status: 'release',
        name: 'ARay Cast',
        version: ['Private', 'v1.12.2'],
        members: 17
    },
    {
        status: 'temp',
        name: 'Test',
        version: ['Private', 'v0.1'],
        members: 2
    },
]

export default userProjects