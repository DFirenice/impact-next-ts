import type priorityProp from './StatusTag.types'
import './StatusTag.css'

export default function StatusTag ({ status = 'completed' }: priorityProp) {
    return <div className={`statusTag statusTag-priority-${status}`}>
        <span>{status !== 'completed' ? `${status} Priority` : 'Completed'}</span>
    </div>
}