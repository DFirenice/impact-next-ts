import Tag from "@/components/UI/Tag/Tag"
import Heading from "../Heading"
import Icon from "../UI/Icon"

import css from './FilterModal.module.css'

const FilterModal = () => {
    return (
        <div className={css.container}>
            <div>
                <Heading><Icon id="filter"/>Filters:</Heading>
            </div>
            <div>
                <ul>
                    <li><Tag>FrontEnd</Tag></li>
                    <li><Tag>BackEnd</Tag></li>
                    <li><Tag>FullStack</Tag></li>
                    {/* Link to customize tags */}
                    <li><Tag>...</Tag></li>
                </ul>
            </div>
        </div>
    )
}

export default FilterModal