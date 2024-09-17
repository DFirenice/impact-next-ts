'use client'

import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

import Heading from '@/components/Heading'
import Avatar from '@/components/UI/Avatar/Avatar'
import Btn from '@/components/UI/Btn/Btn'

import css from './style.module.css'
import Icon from '@/components/UI/Icon'

const Profile = () => {
    const { data: session } = useSession()
    const handleSignOut = () => { signOut({ callbackUrl: '/' }) }
    
    return <section className={css.container}>
        <div className={css.profile_info_container}>
            <div className="block_aligned">
                <Avatar src={session?.user?.image as string}/>
                <div className={`inline_heading block_aligned ${css.profile_info}`}>
                    <div>
                        <Heading size="large">{session?.user?.name || 'Guest'}</Heading>
                        <span data-font-accent="low">User's id</span>
                        <p>User's bio</p>
                    </div>
                    <div className={css.profile_controls}>
                        <Btn>
                            <span>Edit profile</span>
                            <Icon id='edit'/>
                        </Btn>
                        <Btn classes="btn-reject" func={handleSignOut}>
                            <Icon id="broken_link"/>
                        </Btn>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Profile