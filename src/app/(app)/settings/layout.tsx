'use client'

import { usePathname } from "next/navigation"

import Heading from "@/components/Heading"
import RoutingPanel from "@/components/routing/RoutingPanel/RoutingPanel"
import Search from "@/components/UI/Search/Search"
import Icon from "@/components/UI/Icon"

import type { Ttabs } from '@app-types/RoutingPanel'
import css from './styles.module.css'

const SettingsTabs: Ttabs = [
    { branch: '/appearance', tabName: 'Appearance' },
    { branch: '/general', tabName: 'General' },
    { branch: '/privacy', tabName: 'Privacy & Account' }
]

const layout = ({ children }: { children: React.ReactNode }) => {
    const currentPath = usePathname()

    return <section className={css.container}>
        <div className={css.navigation}>
            <div className="inline_heading">
                <Heading level={2} size="larger">
                    <div className='block_aligned'>
                        <Icon size='large' id='gear'/>
                        <span>Settings</span>
                    </div>
                </Heading>
                <Search value='' onChange={() => {}} text="Look for a setting..."/>
            </div>
            <div>
                <RoutingPanel path={currentPath} tabs={SettingsTabs}/>
            </div>
        </div>
        { children }
    </section>
}

export default layout