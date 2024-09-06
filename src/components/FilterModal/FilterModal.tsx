import Tag from "@/components/UI/Tag/Tag"

import css from './FilterModal.module.css'
import Heading from "../Heading"
import Icon from "../UI/Icon"

const FilterModal = () => {
    return (
        <div className={css.container}>
            <div>
                <Heading><Icon id="filter"/>Filters:</Heading>
            </div>
            <div>
                <ul>
                    <li><Tag func={() => {console.log('viewing only FrontEnd')}}>FrontEnd</Tag></li>
                    <li><Tag func={() => {console.log('viewing only BackEnd')}}>BackEnd</Tag></li>
                    <li><Tag func={() => {console.log('viewing only FullStack')}}>FullStack</Tag></li>
                    {/* Link to customize tags */}
                    <li><Tag>...</Tag></li>
                </ul>
            </div>
        </div>
    )
}

export default FilterModal