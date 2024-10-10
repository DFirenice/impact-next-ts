'use client'

import useComponentSwitcher from '@/hooks/useComponentSwitcher'
import { useCTask } from '@/contexts/CurrentTask'

import BranchBtn from '@/components/BranchBtn/BranchBtn'
import MiniChat from '@/components/MiniChat/MiniChat'
import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'
import NotFound from '@/components/NotFound/NotFound'
import ProgressCard from '@/components/ProgressCard/ProgressCard'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import css from '@/app/(app)/planner/style.module.css'

const TaskDashboard = () => {
    const { CTask } = useCTask()

    // Data on tabs for the ComponentSwitcher
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
                <div className={css.current_contributors_container}>
                    {CTask?.associates.map((username) => {
                        return <BranchBtn
                            key={`task_contributor_${username}`}
                            heading={username}
                            subtext="Request person's info"
                            icon='/images/light_skeleton.webp'
                        />
                    })}
                </div>
            )
        },
        {
            tabName: 'Recent Chat',
            component: <MiniChat/>
        }
    ]
    
    const { renderPanel, renderContent } = useComponentSwitcher(currentTaskTabs)
    const todaysDate = new Date().toLocaleDateString()
    
    return (
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
                        <ProgressCard value={68} size='larger' subtext='Work done'/>
                        <ProgressCard value={68} size='larger' subtext='Work done'/>
                    </div>
                    {/* Current task, Droppable area */}
                    {
                        CTask && (
                            <Droppable droppableId='planner_current'>
                                {provided => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                        <Draggable draggableId='planner_current_task' index={0}>
                                            {provided => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
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
                        )
                    }
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
    )
}

export default TaskDashboard