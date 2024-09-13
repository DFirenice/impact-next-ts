import Heading from '@/components/Heading'
import TaskCard from '@/components/TaskCard/TaskCard'
import Icon from '@/components/UI/Icon'

import css from './style.module.css'

const PlannerPage = () => {
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
        <section>
            <div>
                <span data-font-accent="medium">Currently viewing</span>
                <Heading size='larger'>All assignments</Heading>
            </div>
            <div className={css.assignments_container}>
                <div className={css.tasks_group}>
                    <div className="block_aligned">
                        <Icon id="cross" size="large"/>
                        <Heading><span data-font-accent="medium">Available</span></Heading>
                    </div>
                    <div>
                        <TaskCard priority='medium' tags={['ui', 'design']}/>
                        <TaskCard priority='high' tags={['bug', 'backend']}/>
                    </div>
                </div>
                <div className={css.tasks_group}>
                    <div className="block_aligned">
                        <Icon id="clock" size="large"/>
                        <Heading><span data-font-accent="medium">In progress</span></Heading>
                    </div>
                    <div>
                        <TaskCard priority='high' tags={['ui', 'design']}/>
                        <TaskCard priority='low' tags={['design']}/>
                    </div>
                </div>
                <div className={css.tasks_group}>
                    <div className="block_aligned">
                        <Icon id="checkmark" size="large"/>
                        <Heading><span data-font-accent="medium">Finished</span></Heading>
                    </div>
                    <div>
                        <TaskCard priority='completed' tags={['ui', 'design']}/>
                    </div>
                </div>
            </div>
        </section>
    </section>
}

export default PlannerPage