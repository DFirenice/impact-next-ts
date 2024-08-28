// import tempUserProjects from '@/data/tempUserProjects'
import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'
import Project from '@/components/pages/Projects/Project/Project'

import css from './styles.module.css'

const ProjectsPage = () => {
    return (
        true
            ? (
                <section className={css.projects_list}>
                    <Project status="Delayed" name="Project X" version={['Public', 'v9.01']} members={1}/>
                    <Project status="Production" name="Ray Cast" version={['Private', 'v1.12.2']} members={3}/>
                    <Project status="Development" name="Test" version={['Private', 'v0.1']} members={2}/>
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