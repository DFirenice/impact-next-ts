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
                    <li><Tag func={() => {console.log('view only Frontend')}}>FrontEnd</Tag></li>
                    <li><Tag func={() => {console.log('view only Frontend')}}>BackEnd</Tag></li>
                    <li><Tag func={() => {console.log('view only Frontend')}}>FullStack</Tag></li>
                    <li><Tag>...</Tag></li>
                </ul>
            </div>
        </div>
    )
}

export default FilterModal