import Heading from '@/components/Heading'

import css from './style.module.css'

const PlannerLayout = ({
    children,
    completion
}: {
    children: React.ReactNode
    completion: React.ReactNode
}) => {
    const todaysDate = new Date().toLocaleDateString()
    
    return <section className={css.planner}>
        <section>
            <div>
                <span data-font-accent="medium">As for today - {todaysDate}</span>
                <Heading size='larger'>In Progress</Heading>
            </div>
            <div className={css.current_container}>
                <div className={css.current_statistics}>
                    Performance graphs
                    {completion}
                    {completion}
                </div>
                <div className={css.current_chats}>
                    Tabs
                    Project branches or chat
                </div>
            </div>
        </section>
        {children}
    </section>
}

export default PlannerLayout