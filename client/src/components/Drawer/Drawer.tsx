import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import useFModal from '@/hooks/useFModal'

import ConfirmationModal from '@/components/UI/ConfirmationModal/ConfirmationModal'
import Search from '@/components/UI/Search/Search'
import Link from 'next/link'
import Icon from '@/components/UI/Icon'
import Btn from '@/components/UI/Btn/Btn'
import Avatar from '@/components/UI/Avatar/Avatar'
import Heading from '@/components/Heading'
import RootLink from '@/components/RootLink'

import css from './Drawer.module.css'

const Drawer = () => {
    const { addFModal, fModalPortal } = useFModal()
    const { data: session } = useSession()
    const user = session?.user

    const handleSignOut = () => {
        addFModal(
            <ConfirmationModal
                func={() => signOut({ callbackUrl: '/' })}
                buttonType='btn-reject'
                content={{
                    heading: 'About to logout?',
                    body: 'You will logout only on this device! You can proceed by clicking "Confirm" below'
                }}
            />
        )
    }
    
    return <>
        { fModalPortal() }
        <section className={css.drawer}>
            <div className={css.wrapper}>
                {/* Account & Search */}
                <div className={css.account}>
                    <div>
                        <Link href="/profile"><Avatar src={user?.image as string}/></Link>
                        <div>
                            <span>Hello,</span>
                            <Link href="/profile" data-font-weight="bold">
                                {` ${user?.name || 'Unauthenticated'}`}
                            </Link>
                        </div>
                        <Btn func={handleSignOut}><Icon id='signout'/></Btn>
                    </div>
                    <Search value="" onChange={() => {}}/>
                </div>
                {/* Tabs */}
                <div className={css.category}>
                    <h3>Common</h3>
                    <div className={css.category_list}>
                        <RootLink link="/home"><Icon id="collection"/>Portal hub</RootLink>
                        <Btn classes="btn-disabled"><Icon id="chats"/>Deliberations</Btn>
                        <RootLink link="/planner"><Icon id="calendar"/>Planner</RootLink>
                    </div>
                </div>
                <div className={css.category}>
                    <h3>Development</h3>
                    <div className={css.category_list}>
                        <RootLink link="/projects/*"><Icon id="collection"/>Projects</RootLink>
                        <Btn classes="btn-disabled"><Icon id="terminal"/>Sandboxes</Btn>
                    </div>
                </div>
                {/* Recent chats */}
                <div className={css.category}>
                    <h3>Impact</h3>
                    <div className={css.category_list}>
                        <RootLink link="/chats"><Icon id="chats"/>All Chats</RootLink>
                        <h3 style={{paddingLeft: '.5rem'}}><p>Recent chats</p></h3>
                        <div className={css.recent_chats} style={{paddingLeft: '.5rem'}}>
                            <Link href="/chats/:userid">
                                <Avatar src="https://spectrumofroses.com/wp-content/uploads/2023/06/blood-on-a-white-rose-red-roses-in-myths-and-legends-Large-1024x574.webp"/>
                                <div>
                                    <Heading>Jack Houl</Heading>
                                    <span>You: ya, this is so complicated</span>
                                </div>
                            </Link>
                            <Link href="/chats/:userid">
                                <Avatar src="https://spectrumofroses.com/wp-content/uploads/2023/06/blood-on-a-white-rose-red-roses-in-myths-and-legends-Large-1024x574.webp"/>
                                <div>
                                    <Heading>Yap Walker</Heading>
                                    <span>Walker: not yet, we’ll see tmrw</span>
                                </div>
                            </Link>
                            <Link href="/chats/:userid">
                                <Avatar src="https://spectrumofroses.com/wp-content/uploads/2023/06/blood-on-a-white-rose-red-roses-in-myths-and-legends-Large-1024x574.webp"/>
                                <div>
                                    <Heading>Warr Connor</Heading>
                                    <span>Connor: <span data-font-weight="bold">1 file attached</span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Settings */}
                <div className={css.category_aligned}>
                    <RootLink
                        data-global-accent="medium"
                        link="/settings/*"
                    >
                        <Icon id='gear'/>
                        <span>Settings</span>
                    </RootLink>
                </div>
            </div>
        </section>
    </>
}

export default Drawer