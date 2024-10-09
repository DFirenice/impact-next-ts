'use client'

import { useCTask } from '@/contexts/CurrentTask'

import TaskDashboard from '@/components/pages/Planner/TaskDashboard'
import Assignments from '@/components/pages/Planner/Assignments'
import { DragDropContext } from 'react-beautiful-dnd'

import tempUserTasks from '@/data/tempUserTasks'
import css from './style.module.css'

const PlannerPage = () => {
    const { setCTask } = useCTask()

    const handleDragEnd = (result: any) => {
        console.log(result)
        
        if (
            !result.destination
            && result.source.droppableId !== 'planner_assignments'
        ) {
            return setCTask(null)  // If dropped outside a valid area
        }

        if (
            result.source.droppableId === result.destination?.droppableId
            && result.source.index === result.destination.index
        ) {
            return  // If dropped in the same spot
        }

        const task = tempUserTasks[result.source.index]
        setCTask(task)
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <section className={css.planner}>
                <TaskDashboard/>
                <Assignments/>
            </section>
        </DragDropContext>
    )
}

export default PlannerPage