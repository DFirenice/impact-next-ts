'use client'

import { useRef, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import Heading from '@/components/Heading'
import Avatar from '@/components/UI/Avatar/Avatar'
import Btn from '@/components/UI/Btn/Btn'
import ActivityMap from '@/components/UI/ActivityMap/ActivityMap'
import Project from '@/components/pages/Projects/Project/Project'
import NotFound from '@/components/NotFound/NotFound'

import userProjects from '@/data/tempUserProjects'
import Icon from '@/components/UI/Icon'
import css from './style.module.css'

const Profile = () => {
    const { data: session } = useSession()
    const activityContainer = useRef<HTMLDivElement>(null)

    // State to hold the container dimensions
    const [ containerSize, setContainerSize ] = useState({ width: 0, height: 0 })
    
    // Activity map data
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const fullYearData = Array.from({ length: 52 }, (_, weekIndex) => {
        return Array.from({ length: 7 }, (_, dayIndex) => {
            return {
                week: `Week ${weekIndex + 1}`,
                day: days[dayIndex],
                count: Math.floor(Math.random() * 10) // Random data
            }
        })
    }).flat()

    // Fixes zero-dimensional-container bug
    useEffect(() => {
        if (activityContainer.current) {
            setContainerSize({
                width: activityContainer.current.clientWidth,
                height: activityContainer.current.clientHeight
            })
        }

        // Resize event
        const handleResize = () => {
            if (activityContainer.current) {
                setContainerSize({
                    width: activityContainer.current.clientWidth,
                    height: activityContainer.current.clientHeight
                })
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return <section className={css.container}>
            <div className={css.banner}>
                <Avatar size={window.innerHeight * 0.1} src={session?.user?.image as string}/>
                <div className="inline_heading block_aligned">
                    <div>
                        <Heading size="large">{session?.user?.name || 'Guest'}</Heading>
                        <span data-font-accent="low">@User's id</span>
                        <p>User's bio</p>
                    </div>
                    <Btn>
                        <span>Edit profile</span>
                        <Icon id='edit'/>
                    </Btn>
                </div>
            </div>
            <div className={css.body}>
                <div className={css.statistics}>
                    <Btn classes="btn-none">
                        <Icon id='folder'/>
                        <span>0 Projects</span>
                    </Btn>
                    <Btn classes="btn-none">
                        <Icon id='undo'/>
                        <span>0 Contributions</span>
                    </Btn>
                </div>
                {/* Activity chart */}
                <div ref={activityContainer} className={css.activity_chart}>
                    <ActivityMap
                        data={fullYearData}
                        width={containerSize.width}
                        height={containerSize.height}
                    />
                </div>
                <div className={css.projects}>
                    <Heading level={3} size="large">All Projects</Heading>
                    <div>
                        {
                            userProjects.length && userProjects.length > 0
                                ? userProjects.map(({ status, name, version, tags, members }) => {
                                    return <Project
                                        key={`profile_project_${name}`}
                                        status={status}
                                        name={name}
                                        version={version}
                                        tags={tags}
                                        members={members}
                                    />
                                })
                                : <div className={css.not_found_container}>
                                    <NotFound
                                        icon='collection'
                                        heading={`${session?.user?.name} has no projects`}
                                        subtext='Or maybe all of them are private...'
                                        shift={false}
                                    />
                                </div>
                        }
                    </div>
                </div>
            </div>
    </section>
}

export default Profile