import { useTagsFilter } from "@/hooks/useTagsFilter"

import Tag from "@/components/UI/Tag/Tag"
import Heading from "../Heading"
import Icon from "@/components/UI/Icon"
import Btn from "@/components/UI/Btn/Btn"

import availableTags from "@/data/tags"
import css from './FilterModal.module.css'

const FilterModal = () => {
    const { toggleTag, clearTags } = useTagsFilter()
    
    return (
        <div className={css.container}>
            <div>
                <Heading size="large">
                    <Icon id="filter"/>
                    <span>Filters:</span>
                </Heading>
                <span data-font-accent="low">Suggested by Impact</span>
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
            <Btn classes="btn-light" func={clearTags}>
                Clear Selected tags
            </Btn>
        </div>
    )
}

export default FilterModal