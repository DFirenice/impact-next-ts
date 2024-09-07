'use client'

import tempUserProjects from '@/data/tempUserProjects'

import { useState } from 'react'
import { useSorting } from '@/contexts/SortingContext'
import { useFindQuery } from '@/contexts/FindContext'
import applyFilter from '@/utils/applyFilter'
import useTagsFilter from '@/hooks/useTagsFilter'

import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'
import Project from '@/components/pages/Projects/Project/Project'

import type { ProjectProps } from '@/types/Project.types'
import css from './styles.module.css'

const ProjectsPage = () => {
    const [openProjectId, setOpenProjectId] = useState<string | null>(null)
    const { sortingMethod } = useSorting()
    const { findQuery } = useFindQuery()
    const { applyTags } = useTagsFilter()

    const toggleContextModal = (projectId: string) => {
        setOpenProjectId(prev => (prev === projectId ? null : projectId))
    }

    // Sorting by tabs first
    const sortedProjects = [...tempUserProjects].sort((a: any, b: any) => {
        if (sortingMethod === 'Name') return a.name.localeCompare(b.name)
        if (sortingMethod === 'Last Modified') return a.version - b.version
        if (sortingMethod === 'Members') return b.members - a.members
        return 0
    })

    // Filter by search query
    const filteredByQuery = applyFilter(findQuery, sortedProjects, 'name')

    // Filter by selected tags
    const finalFilteredProjects = applyTags(filteredByQuery)

    return (
        finalFilteredProjects.length > 0
            ? (
                <section className={css.projects_list}>
                    {finalFilteredProjects.map(({ status, name, version, members, tags }: ProjectProps) => (
                        <Project
                            key={`project_${name}`}
                            status={status}
                            name={name}
                            tags={tags}
                            version={version}
                            members={members}
                            isContextOpen={openProjectId === name}
                            toggleContextModal={() => toggleContextModal(name)}
                        />
                    ))}
                </section>
            )
            : (
                <NotFound
                    heading="You don't have any projects yet"
                    subtext={
                        <>
                            {`Would you like to `}
                            <Btn classes="btn-none">
                                <span data-font-accent="medium">create one?</span>
                            </Btn>
                        </>
                    }
                />
            )
    )
}

export default ProjectsPage