import './StatusTag.css'
type priorityProp = { status?: 'high' | 'medium' | 'low' | 'completed' }

export default function StatusTag ({ status = 'completed' }:priorityProp) {
    return <div className={`statusTag statusTag-priority-${status}`}>
        <span>{status !== 'completed' ? `${status} Priority` : 'Completed'}</span>
    </div>
}