import Tabs from '@app-pages/Projects/Tabs/Tabs'
import css from './styles.module.css'

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
    return <section className={css.projects}>
        <Tabs/>
        {children}
    </section>
}

export default ProjectsLayout