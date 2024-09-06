import type { ProjectProps } from "@app-types/Project.types"

const userProjects: ProjectProps[] = [
    {
        status: 'dev',
        name: 'Project X',
        version: ['Public', 'v9.01'],
        tags: ['FrontEnd'],
        members: 1
    },
    {
        status: 'release',
        name: 'ARay Cast',
        version: ['Private', 'v1.12.2'],
        tags: ['Fullstack'],
        members: 17
    },
    {
        status: 'temp',
        name: 'Test',
        version: ['Private', 'v0.1'],
        tags: ['FrontEnd'],
        members: 2
    },
]

export default userProjects