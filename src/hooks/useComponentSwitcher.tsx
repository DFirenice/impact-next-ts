'use client'

import { useState } from 'react'

import css from '@/components/routing/RoutingPanel.module.css'

type Tcase = {
    tabName: string
    component: React.ReactNode
}

const useComponentSwitcher = (cases: Tcase[], initial?: string) => {
    const initialIndex = cases.findIndex(obj => obj.tabName === initial)
    
    const [activeTab, setActiveTab] = useState(
        initial
            ? initialIndex === -1 ? () => {
                    console.warn(`"${initial}" tab does not exist!`)
                    return 0
                } : initialIndex
            : 0
    )

    // Render the panel (tabs)
    const renderPanel = () => (
        <div className={css.routing_panel}>
            <div className={css.tabs}>
                <ul>
                    {cases.map(({ tabName }, index) => (
                        <li
                            key={`ComponentSwitcher_${tabName}_tab`}
                            className={activeTab === index ? css.tab__active : ''}
                            onClick={() => setActiveTab(index)}
                        >
                            <span data-font-accent="medium">{tabName}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

    // Render the content of the active tab
    const renderContent = () => {
        return cases[activeTab]?.component || null
    }

    return { renderPanel, renderContent }
}

export default useComponentSwitcher