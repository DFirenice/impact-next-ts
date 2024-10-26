'use client'

import { useState } from 'react'

import Heading from '@/components/Heading'
import Field from '@/components/UI/Field/Field'
import RadioSelection from '@/components/UI/RadioSelection/RadioSelection'
import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'
import UserTag from '@/components/UI/UserTag/UserTag'

import privacyOptions from '@/data/privacyOptions'
import css from './styles.module.css'

const NewProject  = () => {
    const [ privacy, setPrivacy ] = useState(privacyOptions[0].value)

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
                <div>
                    {/* Dev test */}
                    <UserTag avatar='' tag='firenic' func={() => {}}/>
                </div>
            </div>
            <div className={`${css.spaced} ${css.bordered}`}>
                <RadioSelection
                    setSelection={setPrivacy}
                    options={privacyOptions}
                    name='newProjectType'
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

export default NewProject