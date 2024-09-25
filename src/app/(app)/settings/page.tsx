'use client'

import { usePathname } from "next/navigation"

import Heading from "@/components/Heading"
import RoutingPanel from "@/components/routing/RoutingPanel/RoutingPanel"

import type { Ttabs } from '@app-types/RoutingPanel'
import css from './styles.module.css'

const SettingsTabs: Ttabs = [
    { branch: '/appearance', tabName: 'Appearance' },
    { branch: '/general', tabName: 'General' },
    { branch: '/privacy', tabName: 'Privacy & Account' }
]

const SettingsPage = () => {
    const currentPath = usePathname()

    return <section className={css.container}>
        <div>
            <Heading level={2} size="larger">Settings</Heading>
            <div>
                <RoutingPanel path={currentPath} tabs={SettingsTabs}/>
            </div>
        </div>
    </section>
}

export default SettingsPage