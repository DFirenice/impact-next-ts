import tempUserProjects from '@/data/tempUserProjects'
import Btn from '@/components/UI/Btn/Btn'
import NotFound from '@/components/NotFound/NotFound'

const ProjectsPage = () => {
    return (
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
    )
}

export default ProjectsPage