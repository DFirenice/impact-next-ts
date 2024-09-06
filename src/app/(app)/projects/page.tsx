'use client'

import tempUserProjects from '@/data/tempUserProjects'

import { useState } from 'react'
import { useSorting } from '@/contexts/SortingContext'
import { useFindQuery } from '@/contexts/FindContext'
import applyFilter from '@/utils/applyFilter'

import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'
import Project from '@/components/pages/Projects/Project/Project'

import type { ProjectProps } from '@app-types/Project.types'
import css from './styles.module.css'
import useTagsFilter from '@/hooks/useTagsFilter'

const ProjectsPage = () => {
    const [openProjectId, setOpenProjectId] = useState<string | null>(null)
    const { sortingMethod } = useSorting()
    const { findQuery } = useFindQuery()
    const { applyTags, getTagsList } = useTagsFilter()

    const toggleContextModal = (projectId: string) => {
        setOpenProjectId(prev => (prev === projectId ? null : projectId))
    }

    // Sorting by Tabs first
    const sortedProjects = [...tempUserProjects].sort((a: any, b: any) => {
        if (sortingMethod === 'Name') return a.name.localeCompare(b.name)
        if (sortingMethod === 'Last Modified') return a.version - b.version // Logic Rework
        if (sortingMethod === 'Members') return b.members - a.members
        return 0
    })

    // Then thru the filter
    const filteredProjects = applyFilter(findQuery, sortedProjects, 'name')

    // Finaly, tags
    const tagsFilteredProjects = applyTags(getTagsList(), filteredProjects)

    return (
        tagsFilteredProjects.length > 0
            ? (
                <section className={css.projects_list}>
                    { filteredProjects.map(({ status, name, version, members, tags = [''] }: ProjectProps) => {
                        return <Project
                            key={`project_${name}`}
                            status={status}
                            name={name}
                            tags={tags}
                            version={version}
                            members={members}
                            isContextOpen={openProjectId === name}
                            toggleContextModal={() => toggleContextModal(name)}
                        />
                    }) }
                </section>
            )
            : tagsFilteredProjects.length === 0
                && sortedProjects.length > 0
                ? (
                    <NotFound
                        heading="Project Not Found"
                        subtext={`Hmm, here is no projects with name "${findQuery}"`}
                        icon="search"
                    />
                )
                : (
                    <NotFound
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
    )
}

export default ProjectsPage