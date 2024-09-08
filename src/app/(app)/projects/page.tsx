'use client'

import tempUserProjects from '@/data/tempUserProjects'

import { useState } from 'react'
import { useSorting } from '@/contexts/SortingContext'
import { useFindQuery } from '@/contexts/FindContext'
import applyFilter from '@/utils/applyFilter'
import { useTagsFilter } from '@/hooks/useTagsFilter'

import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'
import Project from '@/components/pages/Projects/Project/Project'

import type { ProjectProps } from '@/types/Project.types'
import css from './styles.module.css'

const ProjectsPage = () => {
    const [openProjectId, setOpenProjectId] = useState<string | null>(null)
    const { sortingMethod } = useSorting()
    const { findQuery } = useFindQuery()
    
    const { applyTags, tagsList } = useTagsFilter()

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

    // Final: tag filtering
    const filteredProjects = applyTags(filteredByQuery)

    return (
        filteredProjects.length > 0
            ? (
                <section className={css.projects_list}>
                    {filteredProjects.map(({ status, name, version, members, tags }: ProjectProps) => (
                        <Project
                            key={`project_${name}`}
                            // Static info
                            status={status}
                            name={name}
                            tags={tags}
                            version={version}
                            members={members}
                            // Modal menu
                            isContextOpen={openProjectId === name}
                            toggleContextModal={() => toggleContextModal(name)}
                        />
                    ))}
                </section>
            )
            : filteredByQuery.length === 0 && findQuery
                ? (
                    <NotFound
                        heading="Project Not Found"
                        subtext={`Hmm, here is no projects with name "${findQuery}"`}
                        icon="search"
                    />
                )
                : tagsList.length > 0
                    ? (
                        <NotFound
                            heading="Projects Not Found"
                            subtext={
                                <span data-font-accent="low">
                                    {'No projects with tag(s): '}
                                    <span
                                        data-font-style="italic"
                                        data-font-accent="low"
                                    >
                                        {tagsList.join(', ')}
                                    </span>
                                </span>
                            }
                            icon='search'
                        />
                    )
                    : (
                        <NotFound
                            heading="You don't have any projects yet"
                            subtext={
                                <>
                                    {'Would you like to '}
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