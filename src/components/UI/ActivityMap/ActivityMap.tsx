import React from 'react'
import { scaleBand, scaleLinear } from '@visx/scale'

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
        range: ['#121212', '#2a2a2a'] // Dark to light
    })

    return (
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
                        fill={color}
                    />
                )
            })}
        </svg>
    )
}

export default ActivityMap