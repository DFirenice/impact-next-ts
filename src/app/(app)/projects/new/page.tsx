import Heading from '@/components/Heading'
import Field from '@/components/UI/Field/Field'
import RadioSelection from '@/components/UI/RadioSelection/RadioSelection'
import Btn from '@/components/UI/Btn/Btn'

import css from './styles.module.css'
import Icon from '@/components/UI/Icon'

const createNewProject = () => {
    return <section className={css.container}>
        <div className={css.wrapper}>
            <Heading size="larger">New Project</Heading>
            <div>
                <span>{`What is your project's name`}</span>
                <Field text='Project name'/>
            </div>
            <div>
                <span data-optional>Invite contributors</span>
                <Field text='List contributors by their @tags'/>
            </div>
            <div className={`${css.spaced} ${css.bordered}`}>
                <RadioSelection options={[
                        {
                            value: 'Private',
                            snippet: 'Only visible for you and shared collaborators',
                            icon: 'lock'
                        },
                        {
                            value: 'Public',
                            snippet: 'Everyone can view your repository',
                            icon: 'folder'
                        }
                    ]} name='newProjectType'
                    direction="row"
                />
            </div>
            <div>
                <Btn>
                    <Icon id='folder'/>
                    <span>Create Project</span>
                </Btn>
            </div>
        </div>
    </section>
}

export default createNewProject