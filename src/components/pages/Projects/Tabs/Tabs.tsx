'use client'

import { useState } from 'react'
import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'
import { useActiveLink } from '@/hooks/useActiveLink'

import type { Ticons } from '@/types/icons'
import css from './Tabs.module.css'
import Search from '@/components/UI/Search/Search'

const Tabs = () => {
    const [ searchValue, setSearchValue ] = useState('')
    return <>
        <div className={css.routing_panel}>
            <div className={css.tabs}>
                <ul>
                    {[
                        { link: '/projects', icon: 'folder', tabName: 'Common' },
                        { link: '/projects/archive', icon: 'archive', tabName: 'Archived' },
                        { link: '/projects/deleted', icon: 'bin', tabName: 'Deleted' }
                    ].map(({ link, icon, tabName }) => {
                        return (
                            <li className={`${useActiveLink(link, css.tab__active)}`}>
                                <Btn classes="btn-none" link={link}>
                                    <Icon id={icon as Ticons}/>
                                    { tabName }
                                </Btn>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        {/* Sorting & search */}
        <div className={css.sorting_panel}>
            <div className={css.sorting_btns}>
                <Btn classes="btn-none"><Icon id="collection"/>Name</Btn>
                <Btn classes="btn-none"><Icon id="calendar"/>Last Modified</Btn>
                <Btn classes="btn-none"><Icon id="user"/>Members</Btn>
            </div>
            <div className={css.sorting_controls}>
                <Btn><Icon id="filter"/></Btn>
                <Search value={searchValue} onChange={setSearchValue}/>
            </div>
        </div>
    </>
}

export default Tabs