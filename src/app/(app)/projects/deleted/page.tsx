import tempUserProjects from '@/data/tempUserProjects'
import NotFound from '@/components/NotFound/NotFound'

const DeletedProjectsPage = () => {
    return (
        tempUserProjects.length
            ? 'Deleted projects list...'
            : <NotFound
                heading="Your bin is clean"
                subtext="Seems nothing is here.."
                icon='bin'
            />
    )
}

export default DeletedProjectsPage