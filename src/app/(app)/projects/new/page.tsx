import Heading from '@/components/Heading'
import Field from '@/components/UI/Field/Field'
import Selection from '@/components/UI/Selection/Selection'

import css from './styles.module.css'

const createNewProject = () => {
    return <section className={css.container}>
        <div className={css.wrapper}>
            <Heading size="larger">New Project</Heading>
            <div>
                <span>{`What is your project's name`}</span>
                <Field text='Project name'/>
            </div>
            <div>
                <span>What type of privacy?</span>
                <Selection options={['Public', 'Private']} initial='Unselected'/>
            </div>
            <div>
                <span data-optional>Invite contributors</span>
                <Field text='List contributors by their @user tag'/>
            </div>
        </div>
    </section>
}

export default createNewProject