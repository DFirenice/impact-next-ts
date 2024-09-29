'use client'

import useTheme from '@/hooks/useTheme'

import Heading from '@/components/Heading'
import DemoSelection from '@/components/DemoSelection/DemoSelection'
import Selection from '@/components/UI/Selection/Selection'

import type { Tthemes } from "@/types/theme"
import css from './../styles.module.css'

const AppearanceTab = () => {
    const { theme: globalTheme, setTheme } = useTheme()
    
    const drawerExtra = ['Recent chats', 'Recent Projects', 'Updated Tasks']
    const tabSizes = [2, 4, 6, 8]
    const themeOptions = [{
        theme: 'System',
        src: '/images/system_skeleton.webp'
    }, {
        theme: 'Dark',
        src: '/images/dark_skeleton.webp'
    }, {
        theme: 'Light',
        src: '/images/light_skeleton.webp'
    }]
    
    return <div className={css.settings}>
        <div>
            <Heading size="large">Appearance</Heading>
            <p data-font-accent="medium">Change how Impact looks and feels in your browser.</p>
        </div>
        {/* Themes */}
        <div>
            <div className={css.category_description}>
                <span data-font-weight="bold">Interface theme</span>
                <span data-font-accent="medium">Change how Impact looks and feels in your browser.</span>
            </div>
            <div className='block_aligned'>
                {themeOptions.map(({ theme, src }) => {
                    return <DemoSelection
                        imageSrc={src}
                        value={theme}
                        active={theme.toLowerCase() === globalTheme}
                        func={() => { setTheme(theme.toLowerCase() as Tthemes) }}
                    />
                })}
            </div>
        </div>
        {/* Drawer extra */}
        <div className={css.inline_category}>
            <div className={css.category_description}>
                <span data-font-weight="bold">Sidebar feature</span>
                <span data-font-accent="medium">What shows in the desktops sidebar</span>
            </div>
            <Selection initial={drawerExtra[0]} options={drawerExtra}/>
        </div>
        {/* Code viewer */}
        <div className={css.inline_category}>
            <div className={css.category_description}>
                <span data-font-weight="bold">Tab size</span>
                <span data-font-accent="medium">Choose the number of spaces a tab is equal to when rendering code</span>
            </div>
            <Selection initial='NO CODE VIEWER CONFIG' options={tabSizes}/>
        </div>
    </div>
}

export default AppearanceTab