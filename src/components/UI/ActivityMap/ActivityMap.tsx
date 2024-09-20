import { scaleBand, scaleLinear } from '@visx/scale'
import { useTooltip } from '@visx/tooltip'
import { localPoint } from '@visx/event'

import css_tooltip from './ToolTip.module.css'

type ActivityData = {
    week: string
    day: string
    count: number
}

type Props = {
    data: ActivityData[]
    width: number
    height: number
}

const ActivityMap: React.FC<Props> = ({ data, width, height }) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const weeks = Array.from(new Set(data.map(d => d.week))) // Unique weeks obtainer

    // Tooltip
    const {
        hideTooltip,
        showTooltip,
        tooltipOpen,
        tooltipLeft,
        tooltipTop,
        tooltipData
    } = useTooltip()

    type Tdatum = {
        value: number,
        date: Date
    }

    const handleMouseOver = (event: React.MouseEvent<SVGRectElement>, datum: Tdatum ) => {
        const target = event.target as SVGElement
        const coords = localPoint(target.ownerSVGElement || target, event)
        
        showTooltip({
            tooltipData: datum,
            tooltipLeft: coords!.x,
            tooltipTop: coords!.y
        })
    }

    // Scales
    const xScale = scaleBand<string>({
        domain: weeks,
        range: [0, width],
        padding: .05
    })

    const yScale = scaleBand<string>({
        domain: days,
        range: [0, height],
        padding: .05
    })

    const colorScale = scaleLinear<string>({
        domain: [0, Math.max(...data.map(d => d.count))],
        range: ['hsl(109 82% 0% / 15%)', 'hsl(109 82% 40% / 45%)'] // Dark to light
    })

    return (
        <div style={{ position: 'relative' }}>
            <svg width={width} height={height}>
                {data.map((d, i) => {
                    const x = xScale(d.week)
                    const y = yScale(d.day)
                    const color = colorScale(d.count)

                    if (x === undefined || y === undefined) return null

                    return (
                        <rect
                            key={i}
                            x={x}
                            y={y}
                            width={xScale.bandwidth()}
                            height={yScale.bandwidth()}
                            onMouseOver={(e) => { handleMouseOver(e, `${d.count} Commit(s) on ${d.day}`) }}
                            onMouseOut={hideTooltip}
                            fill={color}
                        />
                    )
                })}
            </svg>
            { tooltipOpen &&(
                <div
                    className={css_tooltip.tooltip}
                    style={{
                        top: tooltipTop + 10,
                        left: tooltipLeft + 15
                    }}
                >
                    {`${tooltipData}`}
                </div>
            )}
        </div>
    )
}

export default ActivityMap