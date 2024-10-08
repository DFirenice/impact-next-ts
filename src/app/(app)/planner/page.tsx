'use client'

import { useState } from 'react'
import { useCTask } from '@/contexts/CurrentTask'

import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'
import Switcher from '@/components/UI/Switcher/Switcher'
import NotFound from '@/components/NotFound/NotFound'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'

import tempUserTasks from '@/data/tempUserTasks'
import css from './style.module.css'

const PlannerPage = () => {
    const [currentSwitch, setCurrentSwitch] = useState<string>('All')
    const { setCTask } = useCTask()

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

    const handleDragEnd = (result: any) => {
        console.log(result)
        
        if (!result.destination) {
            return setCTask(null)  // If dropped outside a valid area
        }

        if (
            result.source.droppableId === result.destination.droppableId
            && result.source.index === result.destination.index
        ) {
            return  // If dropped in the same spot
        }

        const task = tempUserTasks[result.source.index]
        setCTask(task)
    }

    return (
        <section className={css.dynamic_assignments}>
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
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId="assignmentsRibbon">
                                    {(provided) => (
                                        <div
                                            className={css.droppable_area}
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {filteredUserTasks.map((task, idx) => (
                                                <Draggable
                                                    key={'task' + task.props.data.id.toString()}
                                                    draggableId={'task'+ task.props.data.id.toString()}
                                                    index={idx}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            {...provided.dragHandleProps}
                                                            {...provided.draggableProps}
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
                            </DragDropContext>
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
    )
}

export default PlannerPage
