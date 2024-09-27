'use client'

import useTheme from '@/hooks/useTheme'

import Heading from '@/components/Heading'
import DemoSelection from '@/components/DemoSelection/DemoSelection'
import Selection from '@/components/UI/Selection/Selection'

import type { Tthemes } from "@/types/theme"
import css from './styles.module.css'

const SettingsPage = () => {
    const { theme: globalTheme, setTheme } = useTheme()
    
    const drawerExtra = ['Recent chats', 'Recent Projects', 'Updated Tasks']
    const themeOptions = ['Default', 'Dark', 'Light']
    
    return <div className={css.settings}>
        <div>
            <Heading size="large">Appearance</Heading>
            <p data-font-accent="medium">Change how Impact looks and feels in your browser.</p>
        </div>
        {/* Themes */}
        <div>
            <div>
                <span data-font-weight="bold">Interface theme</span>
                <span data-font-accent="medium">Change how Impact looks and feels in your browser.</span>
            </div>
            <div className='block_aligned'>
                {themeOptions.map(theme => {
                    return <DemoSelection
                        imageSrc='https://images.unsplash.com/photo-1726534168836-59dff8524925?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        value={theme}
                        active={theme.toLowerCase() === globalTheme}
                        func={() => { setTheme(theme.toLowerCase() as Tthemes) }}
                    />
                })}
            </div>
        </div>
        {/* Drawer extra */}
        <div className={css.inline_category}>
            <div>
                <span data-font-weight="bold">Sidebar feature</span>
                <span data-font-accent="medium">What shows in the desktops sidebar</span>
            </div>
            <Selection initial={drawerExtra[0]} options={drawerExtra}/>
        </div>
    </div>
}

export default SettingsPage