'use client'
import { usePathname } from 'next/navigation'

import tempUserProjects from '@/data/tempUserProjects'
import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'
import Icon from '@/components/UI/Icon'
import type { Ticons } from '@/types/icons'

import css from './styles.module.css'
import { useActiveLink } from '@/hooks/useActiveLink'

const ProjectsPage = () => {
    console.log(usePathname())
    return <section className={css.projects}>
        {/* Control pagel */}
            <div className={css.panel}>
                {/* Navigation */}
                <div className={css.tabs}>
                    <ul>
                        {[
                            { link: '/projects', icon: 'folder', tabName: 'Common' },
                            { link: '/projects/archive', icon: 'archive', tabName: 'Archived' },
                            { link: '/projects/deleted', icon: 'bin', tabName: 'Deleted' }
                        ].map(({ link, icon, tabName }) => {
                            return (
                                <li className={`${useActiveLink(link, css.tab__active)}`}>
                                    <Btn classes="btn-none" link={link}>
                                        <Icon id={icon as Ticons}/>
                                        { tabName }
                                    </Btn>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {/* Sorting & search */}
        {/* Tab's sorted projects */}
        {/* Body */}
        <div>
            {
                tempUserProjects.length
                    ? 'Projects list...'
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
            }
        </div>
    </section>
}

export default ProjectsPage