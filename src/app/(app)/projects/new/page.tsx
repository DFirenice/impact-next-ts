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
    const [ tagsFieldValue, setTagsFieldValue ] = useState('')
    const [ users, setUsers ] = useState<[] | string[]>([])

    const handleTagsFieldChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ' ' || e.key === 'Enter') {
            if (
                users.find(user => user === e.target.value)
                 || e.target.value === ''
            ) {
                setTagsFieldValue(tagsFieldValue.trim())
            } else {
                addUser(tagsFieldValue.trim())
                setTagsFieldValue('')
            }
        }
    }

    const addUser = (userTag: string) => {
        setUsers([...users, userTag])
        // Check if user exists
        // ...
    }

    // Remove user from 'users'
    const removeInvite = (userTag: string) => setUsers(users.filter(user => user !== userTag))

    return <section className={css.container}>
        <div className={css.wrapper}>
            <Heading size="larger">New Project</Heading>
            <div>
                <span>{`What is your project's name`}</span>
                <Field text='Project name'/>
            </div>
            <div>
                <span data-optional>Invite contributors</span>
                <Field
                    text='List contributors by their @tags' 
                    state={[tagsFieldValue, setTagsFieldValue]}
                    keyDownFunc={handleTagsFieldChange}
                />
                { users.length > 0 && (
                    <div className={css.added_users_container}>
                        { users.map((user, idx) => (
                            <UserTag
                                avatar=''
                                tag={user}
                                func={() => removeInvite(user)}
                                key={`${user}${idx}`}
                            />
                        )) }
                    </div>
                ) }
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