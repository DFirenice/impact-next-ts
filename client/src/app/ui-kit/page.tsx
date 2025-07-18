'use client'

import Heading from '@/components/Heading'
import Search from '@/components/UI/Search/Search'
import Selection from '@/components/UI/Selection/Selection'
import Btn from '@/components/UI/Btn/Btn'
import Tag from '@/components/UI/Tag/Tag'
import StatusTag from '@/components/UI/StatusTag/StatusTag'
import Field from '@/components/UI/Field/Field'

import css from './styles.module.css'
import { useRef, useState } from 'react'
import Indicator from '@/components/UI/Indicator/Indicator'
import RadioSelection from '@/components/UI/RadioSelection/RadioSelection'

export default function UIKit () {
    // Fields | 'Assign To'
    const assignToRef = useRef(null)
    // Fields | 'Search'
    const [ searchValue, setSearchValue ] = useState('')

    return <>
        <span data-font-size="massive"
            style={{display: 'flex', width: '100%', padding: '3rem 3rem 0 3rem'}}
        >
            UI kit Demo
        </span>
        <div className={css.container}>
            {/* Fields */}
            <section>
                <Heading size="large">Fields</Heading>
                <div className={`${css.samples} ${css.samples_column}`}>
                    <Heading level={3}>Search</Heading>
                    <Search value={searchValue} onChange={(value) => {
                        setSearchValue(value)
                        console.log(value)
                    }}/>
                </div>
                <div className={`${css.samples} ${css.samples_column}`}>
                    <Heading level={3}>Selection</Heading>
                    <Selection options={['Public', 'Private']}/>
                    <Selection initial="Dev category" options={['Frontend', 'Backend']}/>
                    <Selection initial="Assign to" options={['Everyone...', 'Alex', 'Sviat']}/>
                </div>
                <div className={`${css.samples} ${css.samples_column}`}>
                    <Heading level={3}>Inputs</Heading>
                    <Field text="example@email.com" icon="mail"/>
                    <Field
                        text="Password"
                        type="password"
                        icon={["invisible", "large"]}
                        order="field-icon"
                    />
                    <Field text="Assign to..." ref={assignToRef}/>
                </div>
                <div className={`${css.samples} ${css.samples_column}`}>
                    <Heading level={3}>Checkboxes</Heading>
                    <RadioSelection options={[
                            {
                                value: 'Private',
                                snippet: 'Only visible for you and shared collaborators',
                                icon: 'lock'
                            },
                            {
                                value: 'Public',
                                snippet: 'Everyone can view you repo',
                                icon: 'folder'
                            }
                        ]} name="RadioSelectionTest"
                        direction="column"
                    />
                </div>
            </section>
            {/* Buttons */}
            <section>
                <Heading size="large">Buttons</Heading>
                <div className={css.samples}>
                    <Btn>Default</Btn>
                    <Btn classes="btn-empty">Empty</Btn>
                    <Btn classes="btn-disabled">Disabled</Btn>
                </div>
                <div className={css.samples}>
                    <Btn classes="btn-light">Light</Btn>
                    <Btn classes="btn-light btn-empty">Empty</Btn>
                    <Btn classes="btn-light btn-disabled">Disabled</Btn>
                </div>
                <div className={css.samples}>
                    <Btn classes="btn-fill">Filled</Btn>
                    <Btn classes="btn-fill btn-empty">Empty</Btn>
                    <Btn classes="btn-fill btn-disabled">Disabled</Btn>
                </div>
                <div className={css.samples}>
                    <Btn classes="btn-reject">Reject</Btn>
                    <Btn classes="btn-reject btn-empty">Empty</Btn>
                    <Btn classes="btn-reject btn-disabled">Disabled</Btn>
                </div>
                <div className={css.samples}><Btn classes="btn-none">None</Btn></div>
            </section>
            {/* Tags */}
            <section>
                <Heading size="large">Tags</Heading>
                <div className={css.samples}>
                    <Heading level={3}>Common</Heading>
                </div>
                <div className={css.samples}>
                    <Tag>Initial</Tag>
                    <Tag classes="tag-disabled">disabled</Tag>
                </div>
                <div className={css.samples}>
                    <Tag classes="tag-empty">transparent</Tag>
                    <Tag classes="tag-empty tag-disabled">disabled</Tag>
                </div>
                <div className={css.samples}>
                    <Tag classes="tag-light">accent</Tag>
                    <Tag classes="tag-light tag-disabled">disabled</Tag>
                </div>
                <div className={css.samples}>
                    <Heading level={3}>Status</Heading>
                </div>
                <div className={css.samples}>
                    <StatusTag status="high"/>
                    <StatusTag status="medium"/>
                    <StatusTag status="low"/>
                    <StatusTag/>
                </div>
                <div className={css.samples}>
                    <Heading level={3}>Status Indicators</Heading>
                </div>
                <div className={`${css.samples} ${css.samples_column}`}>
                   <div>
                        <Indicator status='stable'/>
                        <span>- Stable</span>
                   </div>
                   <div>
                        <Indicator status='release'/>
                        <span>- Release</span>
                   </div>
                   <div>
                        <Indicator status='dev'/>
                        <span>- Dev (Development)</span>
                   </div>
                   <div>
                        <Indicator status='temp'/>
                        <span>- Temp (Temporary)</span>
                   </div>
                   <div>
                        <Indicator status='declined'/>
                        <span>- Declined</span>
                   </div>
                </div>
            </section>
            <section>
                <Heading size="large">Text</Heading>
                <div className={`${css.samples} ${css.samples_column}`}>
                    <div className={css.samples}>
                        <Heading level={3}>Headings</Heading>
                    </div>
                    <Heading size="massive">Massive Heading</Heading>
                    <Heading size="larger">Larger Heading</Heading>
                    <Heading size="large">Large Heading</Heading>
                    <Heading>Initial heading</Heading>
                </div>
                <div className={`${css.samples} ${css.samples_column}`}>
                    <div className={css.samples}>
                        <Heading level={3}>Font accents</Heading>
                    </div>
                    <span data-font-accent="high">High (default) font accent</span>
                    <span data-font-accent="medium">Medium font accent</span>
                    <span data-font-accent="low">Low font accent</span>
                </div>
            </section>
        </div>
    </>
}