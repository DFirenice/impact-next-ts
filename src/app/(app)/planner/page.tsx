import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'

import css from './style.module.css'

const PlannerPage = () => {
    return <section className={css.planner}>
        <section>
            <div>
                <span data-font-accent="medium">Current date</span>
                <Heading size='larger'>Today's tasks & Upcoming Events</Heading>
            </div>
            <div>
                tasks & events
            </div>
        </section>
        <section>
            <div>
                <span data-font-accent="medium">Currently viewing</span>
                <Heading size='larger'>All assignments</Heading>
            </div>
            <div>
                <TaskCard priority='medium'/>
            </div>
        </section>
    </section>
}

export default PlannerPage