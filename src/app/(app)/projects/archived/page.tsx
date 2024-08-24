import tempUserProjects from '@/data/tempUserProjects'
import NotFound from '@/components/NotFound/NotFound'

const ArchivedProjectsPage = () => {
    return (
        tempUserProjects.length
            ? 'Archived projects list...'
            : <NotFound
                heading="Nothing is in archive yet"
                subtext="Keep working hard, so, ultimately, you’d put one here..."
                icon='archive'
            />
    )
}

export default ArchivedProjectsPage