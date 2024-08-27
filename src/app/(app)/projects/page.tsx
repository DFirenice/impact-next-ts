// import tempUserProjects from '@/data/tempUserProjects'
import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'
import Project from '@/components/pages/Projects/Project/Project'

const ProjectsPage = () => {
    return (
        true
            ? <Project status="Development" name="Project X" version={['Public', 'v0.1']} members={1}/>
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