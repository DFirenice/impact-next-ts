import { useUser } from '@/contexts/userProvider'
import Search from '@/components/UI/Search/Search'
import Link from 'next/link'
import Icon from '@/components/UI/Icon'
import Btn from '@/components/UI/Btn/Btn'
import Avatar from '@/components/UI/Avatar/Avatar'
import Heading from '@/components/Heading'

import css from './Drawer.module.css'

const Drawer = () => {
    const user = useUser()
    return <section className={css.drawer}>
        <div className={css.wrapper}>
            {/* Account & Search */}
            <div className={css.account}>
                <div>
                    <Avatar src="https://spectrumofroses.com/wp-content/uploads/2023/06/blood-on-a-white-rose-red-roses-in-myths-and-legends-Large-1024x574.webp"/>
                    <div>
                        <span>Hello,</span>
                        <Link href="/profie" data-font-weight="bold">{` ${user?.username}`}</Link>
                    </div>
                </div>
                <Search value="" onChange={() => {}}/>
            </div>
            {/* Tabs */}
            <div className={css.category}>
                <h3>Common</h3>
                <div className={css.category_list}>
                    <Btn link="/home"><Icon id="collection"/>Portal hub</Btn>
                    <Btn link="/delibs"><Icon id="chats"/>Deliberations</Btn>
                    <Btn link="/planner"><Icon id="calendar"/>Planner</Btn>
                </div>
            </div>
            <div className={css.category}>
                <h3>Development</h3>
                <div className={css.category_list}>
                    <Btn link="/projects"><Icon id="collection"/>Projects</Btn>
                    <Btn classes="btn-disabled"><Icon id="terminal"/>Sandboxes</Btn>
                </div>
            </div>
            {/* Recent chats */}
            <div className={css.category}>
                <h3>Impact</h3>
                <div className={css.category_list}>
                    <Btn link="/chats"><Icon id="chats"/>All Chats</Btn>
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
            {/* ... */}
        </div>
    </section>
}

export default Drawer   