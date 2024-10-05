'use client'

import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'

import useComponentSwitcher from '@/hooks/useComponentSwitcher'

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
    const currentTaskTabs = [
        {
            tabName: 'Branches',
            component: <div>All assignment branches should be listed here</div>
        },
        {
            tabName: 'All Contributors',
            component: (
                <div>
                    <ul>
                        {tempUserTasks[0].associates.map((username) => {
                            return <li key={`task_contributor_${username}`}>
                                {username}
                            </li>
                        })}
                    </ul>
                </div>
            )
        },
        {
            tabName: 'Recent Chat',
            component: chat
        }
    ]

    const { renderPanel, renderContent } = useComponentSwitcher(currentTaskTabs)
    const todaysDate = new Date().toLocaleDateString()

    return (
        <section className={css.planner}>
            <section>
                <div>
                    <span data-font-accent="medium">
                        As for today - {todaysDate}
                    </span>
                    <Heading size="larger">Current task overview</Heading>
                </div>
                <div className={css.current_container}>
                    <div className={css.current_statistics}>
                        <div>
                            {[completion, completion]}
                        </div>
                        <TaskCard data={tempUserTasks[0]} />
                    </div>
                    <div className={css.current_chats}>
                        {renderPanel()}
                        <div className={css.chat}>
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </section>
            {children}
        </section>
    )
}

export default PlannerLayout