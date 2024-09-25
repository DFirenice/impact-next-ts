'use client'

import { useActiveLink } from '@/hooks/useActiveLink'

import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'

import type { routingPanelProps } from '@app-types/RoutingPanel'
import { Ticons } from '@/types/icons'
import css from './RoutingPanel.module.css'

const RoutingPanel = ({ path, tabs }: routingPanelProps) => {
    // console.log(path + tabs[0].link) => /projects/
    //  where "/" from an empty route, ultimately, 
    //  doesn't match with currentPath: /project
    return <div className={css.routing_panel}>
        <div className={css.tabs}>
            <ul>
                {tabs.map(({ branch, icon, tabName }) => {
                    return (
                        <li
                            className={useActiveLink(path + branch, css.tab__active)}
                            key={tabName}
                        >
                            <Btn classes="btn-none" link={path + branch}>
                                { icon ? <Icon id={icon as Ticons}/> : null }
                                { tabName }
                            </Btn>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
}

export default RoutingPanel