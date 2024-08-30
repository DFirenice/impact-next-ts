'use client'

import tempUserProjects from '@/data/tempUserProjects'

import { useState } from 'react'

import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'
import Project from '@/components/pages/Projects/Project/Project'

import type { ProjectProps } from '@app-types/Project.types'
import css from './styles.module.css'

const ProjectsPage = () => {
    const [openProjectId, setOpenProjectId] = useState<string | null>(null)

    const toggleContextModal = (projectId: string) => {
        setOpenProjectId(prev => (prev === projectId ? null : projectId))
    }

    return (
        true
            ? (
                <section className={css.projects_list}>
                    { tempUserProjects.map(({ status, name, version, members }: ProjectProps) => {
                        return <Project
                            key={`project_${name}`}
                            status={status}
                            name={name}
                            version={version}
                            members={members}
                            // Experimental
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