'use client' // Use server component instead, additionaly, fix passing event issue

import { useUser } from '@/contexts/userProvider'
import { userPortals } from '@/data/user'
import Heading from '@/components/Heading'
import getGreetings from '@/utils/getGreetings'
import HomePortal from '@/components/HomePortal/HomePortal'

import css from './styles.module.css'

const HomePage = () => {
    const user = useUser()
    const { greeting, username } = getGreetings(user?.username)

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