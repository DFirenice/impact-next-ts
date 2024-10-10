'use client'

import { useState } from 'react'

import TaskCard from '@/components/TaskCard/TaskCard'
import Switcher from '@/components/UI/Switcher/Switcher'
import Heading from '@/components/Heading'
import NotFound from '@/components/NotFound/NotFound'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import tempUserTasks from '@/data/tempUserTasks'
import css from '@/app/(app)/planner/style.module.css'

const PlannerAssignments = () => {
    const [currentSwitch, setCurrentSwitch] = useState<string>('All')

    // should be the hook which parses user tasks
    const getUserTasks = () => {
        return tempUserTasks.map(({ associates, body, heading, tags, priority, time, id }) => {
            const data = { associates, body, heading, tags, priority, time, id }
            return <TaskCard data={data} key={`taskCard_${heading}`}/>
        })
    }

    const filteredUserTasks = getUserTasks().filter(task => {
        if (currentSwitch === 'All') { return task }
        if (currentSwitch === 'Active') { return task.props.data.priority !== 'completed' }
        else { return task.props.data.priority === 'completed' }
    })

    return <section className={css.dynamic_assignments}>
        <div className="inline_heading">
            <div>
                <span data-font-accent="medium">Currently viewing</span>
                <Heading size='larger'>All assignments</Heading>
            </div>
            <div>
                <Switcher
                    items={['All', 'Active', 'Completed']}
                    currentSwitch={currentSwitch}
                    setCurrentSwitch={setCurrentSwitch}
                />
            </div>
        </div>
        <div className={css.assignments_container}>
            {
                filteredUserTasks.length > 0
                    ? (
                        <Droppable droppableId='planner_assignments'>
                            {provided => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {filteredUserTasks.map((task, index) => (
                                        <Draggable
                                            draggableId={`assignment_i_${index}`}
                                            key={`assignment_index_${index}`}
                                            // Incorrect. Filtered version is not a pure source
                                            index={index}
                                        >
                                            {provided => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    {task}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    )
                    : currentSwitch !== 'Completed'
                        ? <NotFound
                            icon="checkmark"
                            heading="All Tasks Completed"
                            subtext="Keep a good work!"
                            shift={false}
                        />
                        : <NotFound
                            icon="checkmark"
                            heading="No Recent Completions"
                            subtext="Seems like all your work has been reviewed and submitted"
                            shift={false}
                        />
            }
        </div>
    </section>
}

export default PlannerAssignments