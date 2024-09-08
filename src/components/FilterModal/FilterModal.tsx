import { useTagsFilter } from "@/hooks/useTagsFilter"

import Tag from "@/components/UI/Tag/Tag"
import Heading from "../Heading"
import Icon from "../UI/Icon"

import availableTags from "@/data/tags"
import css from './FilterModal.module.css'

const FilterModal = () => {
    const { toggleTag } = useTagsFilter()
    
    return (
        <div className={css.container}>
            <div>
                <Heading><Icon id="filter"/>Filters:</Heading>
            </div>
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
        </div>
    )
}

export default FilterModal