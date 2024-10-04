import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'

import tempUserTasks from '@/data/tempUserTasks'
import css from './style.module.css'

const PlannerLayout = ({
    children,
    completion,
    chat
}: {
    children: React.ReactNode
    completion: React.ReactNode
    chat: React.ReactNode
}) => {
    const todaysDate = new Date().toLocaleDateString()
    
    return <section className={css.planner}>
        <section>
            <div>
                <span data-font-accent="medium">As for today - {todaysDate}</span>
                <Heading size='larger'>Current task overview</Heading>
            </div>
            <div className={css.current_container}>
                <div className={css.current_statistics}>
                    <div>
                        {[
                            completion,
                            completion
                        ]}
                    </div>
                    <TaskCard data={tempUserTasks[0]}/>
                </div>
                <div className={css.current_chats}>
                    <div className={css.chat}>
                        {chat}
                    </div>
                </div>
            </div>
        </section>
        {children}
    </section>
}

export default PlannerLayout