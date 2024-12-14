import type { TagTypes } from "@/types/TagType.types"
import typeTags from '@/data/typeTags'
import css from './TypeTag.module.css'

const TypeTag = ({ status }: { status: TagTypes }) => {
    return (
        <div
            className={css.tag}
            style={{ '--_clr-main': typeTags[status].color } as React.CSSProperties}
            id="tag"
        >
            <span>{typeTags[status].type}</span>
        </div>
    )
}

export default TypeTag