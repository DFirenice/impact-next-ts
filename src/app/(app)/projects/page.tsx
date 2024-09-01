'use client'

import tempUserProjects from '@/data/tempUserProjects'

import { useState } from 'react'
import { useSorting } from '@/contexts/SortingContext'

import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'
import Project from '@/components/pages/Projects/Project/Project'

import type { ProjectProps } from '@app-types/Project.types'
import css from './styles.module.css'

const ProjectsPage = () => {
    const [openProjectId, setOpenProjectId] = useState<string | null>(null)
    const { sortingMethod } = useSorting()

    const toggleContextModal = (projectId: string) => {
        setOpenProjectId(prev => (prev === projectId ? null : projectId))
    }

    const sortedProjects = [...tempUserProjects].sort((a: any, b: any) => {
        if (sortingMethod === 'Name') return a.name.localeCompare(b.name)
        if (sortingMethod === 'Last Modified') return a.version - b.version // Logic Rework
        if (sortingMethod === 'Members') return b.members - a.members
        return 0
    })

    return (
        sortedProjects.length > 0
            ? (
                <section className={css.projects_list}>
                    { sortedProjects.map(({ status, name, version, members }: ProjectProps) => {
                        return <Project
                            key={`project_${name}`}
                            status={status}
                            name={name}
                            version={version}
                            members={members}
                            isContextOpen={openProjectId === name}
                            toggleContextModal={() => toggleContextModal(name)}
                        />
                    }) }
                </section>
            )
            : <NotFound
                heading="You don't have any projects yet"
                subtext={
                    <>
                        {`Would you like to `}
                        <Btn classes="btn-none">
                            {/* btn-none has a medium accent by the default, but still */}
                            <span data-font-accent="medium">create one?</span>
                        </Btn>
                    </>
                }
            />
    )
}

export default ProjectsPage