import './Splitter.css'
type SplitterProps = { axis?: 'vertical' | 'horizontal' }

export default function Splitter ({ axis = 'horizontal' }: SplitterProps) {
    return <div className={`splitter splitter-${axis}`}></div>
}