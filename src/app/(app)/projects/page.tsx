import tempUserProjects from '@/data/tempUserProjects'
import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'

import css from './styles.module.css'

const ProjectsPage = () => {
    return <section className={css.projects_page}>
        {/* Control pagel */}
            <div className={css.panel}>
                <div className={css.tabs}>
                    {/* Navigation */}
                    <ul>
                        <li><Btn classes="btn-none" link="projects/common">Common</Btn></li>
                        <li><Btn classes="btn-none" link="projects/archive">Archived</Btn></li>
                        <li><Btn classes="btn-none" link="projects/deleted">Deleted</Btn></li>
                    </ul>
                </div>
            </div>
            {/* Sorting & search */}
        {/* Tab's sorted projects */}
        {/* Body */}
        <div>
            { tempUserProjects.length
                ? 'Projects list...'
                : <NotFound/> }
        </div>
    </section>
}

export default ProjectsPage