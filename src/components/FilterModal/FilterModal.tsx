import { useTagsFilter } from "@/hooks/useTagsFilter"

import Tag from "@/components/UI/Tag/Tag"
import Btn from "@/components/UI/Btn/Btn"

import availableTags from "@/data/tags"
import css from './FilterModal.module.css'

const FilterModal = () => {
    const { toggleTag, clearTags } = useTagsFilter()
    
    return (
        <div className={css.container}>
            <span data-font-accent="low">Suggested by Impact</span>
            <div>
                <ul>
                   {availableTags.map(
                        tag => (
                            <li
                                key={`tag_${tag}`}
                                onClick={() => {toggleTag(tag)}}
                            >
                                <Tag>{tag}</Tag>
                            </li>
                        )
                   )}
                   {/* Link to customize user's tags */}
                   <li><Tag>...</Tag></li>
                </ul>
            </div>
            <Btn classes="btn-light" func={clearTags}>
                Clear Selected tags
            </Btn>
        </div>
    )
}

export default FilterModal