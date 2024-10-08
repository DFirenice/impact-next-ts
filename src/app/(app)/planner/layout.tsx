'use client'

import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'
import BranchBtn from '@/components/BranchBtn/BranchBtn'
import NotFound from '@/components/NotFound/NotFound'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import { useCTask } from '@/contexts/CurrentTask'
import useComponentSwitcher from '@/hooks/useComponentSwitcher'

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
    const { CTask } = useCTask()
    
    const currentTaskTabs = [
        {
            tabName: 'Branches',
            component: <div className={css.current_branches_container}>
                {[...Array(3)].map((_, idx) => {
                    return <BranchBtn
                        key={idx}
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
                        {CTask?.associates.map((username) => {
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
                                    {
                                        CTask
                                            && (
                                                <Draggable draggableId={CTask?.id || 'CTaskUnset'} index={0}>
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
                                            )
                                    } 
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    { CTask ? (
                        <div className={css.current_chats}>
                            {renderPanel()}
                            <div className={css.chat}>
                                {renderContent()}
                            </div>
                        </div>
                    ) : (
                        <NotFound
                            icon='collection'
                            heading='Current Task is Inactive'
                            subtext='Drag and drop one here from your assignments list to begin'
                            shift={false}
                        />
                    ) }
                </div>
            </section>
            {children}
        </section>
    )
}

export default PlannerLayout