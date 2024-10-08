'use client'

import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'
import BranchBtn from '@/components/BranchBtn/BranchBtn'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { useState } from 'react'
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
    // here, i want to have same in my ribbon of tasks below (in absolutely other component) for example
    const [ CTask, setCTask ] = useState(tempUserTasks[0])

    const currentTaskTabs = [
        {
            tabName: 'Branches',
            component: <div className={css.current_branches_container}>
                {[...Array(3)].map(branch => {
                    return <BranchBtn
                        key={branch + Math.random() * 10}
                        icon="collection"
                        heading='Test'
                        subtext="Test subtext"
                    />
                })}
            </div>
        },
        {
            tabName: 'All Contributors',
            component: (
                <div>
                    <ul>
                        {CTask.associates.map((username) => {
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
                        <Droppable droppableId="currentTask">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    <Draggable draggableId={CTask.id} index={0}>
                                        {(provided) => (
                                            <div
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}
                                            >
                                                <TaskCard data={CTask}/>
                                            </div>
                                        )}
                                    </Draggable>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
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