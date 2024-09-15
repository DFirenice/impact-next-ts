'use client'

import { useState } from 'react'

import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'
import Switcher from '@/components/UI/Switcher/Switcher'
import NotFound from '@/components/NotFound/NotFound'

import tempUserTasks from '@/data/tempUserTasks'
import css from './style.module.css'

const PlannerPage = () => {
    const [ currentSwitch, setCurrentSwitch ] = useState<string>('All')

    // should be the hook which parses user tasks
    const getUserTasks = () => {
        return tempUserTasks.map(({ associates, body, heading, tags, priority, time }) => {
            return <TaskCard
                priority={priority}
                associates={associates}
                body={body}
                heading={heading}
                tags={tags}
                time={time}
            />
        })
    }
    
    const filteredUserTasks = getUserTasks().filter(task => {
        if (currentSwitch === 'All') { return task }
        if (currentSwitch === 'Active') { return task.props.priority !== 'completed' }
        else { return task.props.priority === 'completed' }
    })
    
    return <section className={css.planner}>
        <section>
            <div>
                <span data-font-accent="medium">Current date</span>
                <Heading size='larger'>Today's tasks & Upcoming Events</Heading>
            </div>
            <div>
                list of tasks & events
            </div>
        </section>
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
                        ? filteredUserTasks
                        : currentSwitch !== 'Completed'
                        // If no results in 'All' & 'Active' tabs
                            ? <NotFound
                                icon='checkmark'
                                heading="All Tasks Compelted"
                                subtext="Keep a good work!"
                            /> // If tab is 'Completed'
                            : <NotFound
                                icon='checkmark'
                                heading="No Recent Compeletions"
                                subtext="Seems, like all your work has been reviewed and submitted"
                            />
                }
            </div>
        </section>
    </section>
}

export default PlannerPage