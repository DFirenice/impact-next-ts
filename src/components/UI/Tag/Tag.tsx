import { TagProps } from './Tag.types'
import './Tag.css'

const Tag = ({ children, classes = 'tag-empty'}:TagProps) => {
    return <div className={`tag ${classes}`.trim()}>
        <span>{children}</span>
    </div>
}

export default Tag