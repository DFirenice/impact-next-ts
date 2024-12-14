'use client'

import { usePathname } from 'next/navigation'
import { useSorting } from '@/contexts/SortingContext'
import { useFindQuery } from '@/contexts/FindContext'
import { useTagsFilter } from '@/contexts/TagsFilterContext'
import useModal from '@/hooks/useModal'

import Btn from '@/components/UI/Btn/Btn'
import Icon from '@/components/UI/Icon'
import Search from '@/components/UI/Search/Search'
import FilterModal from '@/components/FilterModal/FilterModal'
import RoutingPanel from '@/components/routing/RoutingPanel/RoutingPanel'

import sortingTabs from '@/data/sortingTabs'
import type { Ttabs } from '@/types/RoutingPanel'
import type { Ticons } from '@/types/icons'
import css from './Tabs.module.css'

const ProjectsTabs: Ttabs = [
    { branch: '', icon: 'folder', tabName: 'Common' },
    { branch: '/archived', icon: 'archive', tabName: 'Archived' },
    { branch: '/deleted', icon: 'bin', tabName: 'Deleted' }
]

const Tabs = () => {
    const path = '/projects'
    
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
            <RoutingPanel path={path} tabs={ProjectsTabs}/>
            <div className={css.new_project}>
                <Btn classes="btn-empty" link="/projects/new">
                    <Icon id="folder" size="small"/>
                    <span>New Project</span>
                </Btn>
            </div>
        </div>
        {/* Sorting & search */}
        { usePathname() !== '/projects/new' && (
            <div className={css.sorting_panel}>
                <div className={css.sorting_btns}>
                    {
                        sortingTabs.map(({ method, icon }) => {
                            return (
                                <Btn
                                    key={`sortBy_${method}_tab`}
                                    classes={`btn-none ${sortingMethod === method && 'active_text'}`}
                                    func={() => {setSortingMethod(method)}}
                                    data-active={sortingMethod == method && "true"}
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
        ) }
    </>
}

export default Tabs