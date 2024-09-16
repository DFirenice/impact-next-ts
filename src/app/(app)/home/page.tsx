'use client' // Use server component instead, additionaly, fix passing event issue

import { useSession } from 'next-auth/react'
import { userPortals } from '@/data/userPortals'
import Heading from '@/components/Heading'
import getGreetings from '@/utils/getGreetings'
import HomePortal from '@/components/HomePortal/HomePortal'

import css from './styles.module.css'

const HomePage = () => {
    const { data: session } = useSession()
    const { greeting, username } = getGreetings(session?.user?.name as string)

    return <section className={css.home}>
        <div className={css.wrapper}>
            <div>
                <Heading size="massive">
                    <span data-font-weight="normal">
                        {greeting}
                    </span>{`, ${username}`}
                </Heading>
            </div>
            {
                userPortals.map(({ title, subtext, icon, link, func }) => {
                    return <HomePortal
                                key={`portal_${title}`}
                                heading={title}
                                subtext={subtext}
                                icon={icon}
                                link={link}
                                func={func}
                            />
                })
            }
        </div>
    </section>
}

export default HomePage