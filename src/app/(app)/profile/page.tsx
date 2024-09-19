'use client'

import { useRef } from 'react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

import Heading from '@/components/Heading'
import Avatar from '@/components/UI/Avatar/Avatar'
import Btn from '@/components/UI/Btn/Btn'

import css from './style.module.css'
import Icon from '@/components/UI/Icon'
import ActivityMap from '@/components/UI/ActivityMap/ActivityMap'

const Profile = () => {
    const { data: session } = useSession()
    const handleSignOut = () => { signOut({ callbackUrl: '/' }) }
    const activityContainer = useRef<HTMLDivElement>(null)

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
                        // size adjustments required
                        data={fullYearData}
                        width={activityContainer.current?.clientWidth || 0}
                        height={activityContainer.current?.clientHeight || 0}
                    />
                </div>
                <div>
                    <Heading size="large">All Projects</Heading>
                </div>
            </div>
    </section>
}

export default Profile