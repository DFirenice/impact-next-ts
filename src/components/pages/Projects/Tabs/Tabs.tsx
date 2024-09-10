'use client'

import { useActiveLink } from '@/hooks/useActiveLink'
import { useSorting } from '@/contexts/SortingContext'
import { useFindQuery } from '@/contexts/FindContext'
import { useTagsFilter } from '@/contexts/TagsFilterContext'
import useModal from '@/hooks/useModal'

import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'
import Search from '@/components/UI/Search/Search'
import FilterModal from '@/components/FilterModal/FilterModal'

import sortingTabs from '@/data/sortingTabs'
import type { Ticons } from '@/types/icons'
import css from './Tabs.module.css'

const Tabs = () => {
    const { findQuery, setFindQuery } = useFindQuery(),
        { sortingMethod, setSortingMethod } = useSorting(),
        { setModal, createModal } = useModal(),
        { tagsList } = useTagsFilter()

    // Replace type any
    const handleFilterClick = (e: any) => {
        const modalContent = <FilterModal/>
        setModal(modalContent, e.currentTarget as Element)
    }
    
    return <>
        <div className={css.routing_panel}>
            <div className={css.tabs}>
                <ul>
                    {[
                        { link: '/projects', icon: 'folder', tabName: 'Common' },
                        { link: '/projects/archived', icon: 'archive', tabName: 'Archived' },
                        { link: '/projects/deleted', icon: 'bin', tabName: 'Deleted' }
                    ].map(({ link, icon, tabName }) => {
                        return (
                            <li className={`${useActiveLink(link, css.tab__active)}`} key={tabName}>
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
                {
                    sortingTabs.map(({ method, icon }) => {
                        return (
                            <Btn
                            key={`sortBy_${method}_tab`}
                            classes={`btn-none ${sortingMethod === method && 'active_link'}`}
                            func={() => {setSortingMethod(method)}}
                            >
                                <Icon id={icon as Ticons}/>
                                {method}
                            </Btn>
                        )
                    })
                }
            </div>
            <div>
                <div className={css.tags_filter}>
                    {tagsList.length > 0 ? <span>{tagsList.length}</span> : null}
                    <Btn func={handleFilterClick}><Icon id="filter"/></Btn>
                </div>
                <Search value={findQuery} onChange={setFindQuery} text="Find a project..."/>
                {createModal}
            </div>
        </div>
    </>
}

export default Tabs