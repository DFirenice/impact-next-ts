import type { TagTypes } from "@/types/TagType.types"
import typeTags from '@/data/typeTags'
import css from './TypeTag.module.css'

const TypeTag = ({ status }: { status: TagTypes }) => {
    return <div className={css.typeTag}>
        <span>{typeTags[`${status}`]}</span>
    </div>
}

export default TypeTag