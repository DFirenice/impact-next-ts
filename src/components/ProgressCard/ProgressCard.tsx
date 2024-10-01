import Heading from '@/components/Heading'

import css from './ProgressCard.module.css'

type ProgressCardProps = {
    value: number | string
    size?: 'default' | 'large' | 'larger'
    subtext?: string
    color?: string | [string, string]
}

const sizeMap = {
    default: {
        svgSize: '8dvh',
        strokeWidth: '.8em'
    },
    large: {
        svgSize: '12.5dvh',
        strokeWidth: '1em'
    },
    larger: {
        svgSize: '16dvh',
        strokeWidth: '1.1em'
    }
}

const ProgressCard = ({
    value,
    subtext,
    size = 'larger',
    color = 'var(--clr-blue-02)'
}: ProgressCardProps) => {
    const sizes = sizeMap[size]
    const colors = (
        Array.isArray(color) && color.length === 2
            ? color
            : [color, color] 
    )

    return (
        <div
            className={css.container}
            style={{
                '--_completion_percents': Number(value),
                '--_svg-size': sizes.svgSize
            } as React.CSSProperties}
        >
            <svg width={sizes.svgSize} height={sizes.svgSize}>
                <defs>
                    <linearGradient id="progressCard_color">
                        <stop offset="0%" stopColor={colors[0]}/>
                        <stop offset="100%" stopColor={colors[1]}/>
                    </linearGradient>
                </defs>
                <circle
                    cx="50%"
                    cy="50%"
                    r="44%"
                    strokeLinecap="round"
                    strokeWidth={sizes.strokeWidth}
                />
            </svg>
            <div className={css.content}>
                <Heading size={size}>{value}{'%'}</Heading>
                {subtext && <span data-font-accent="medium">{subtext}</span>}
            </div>
        </div>
    )
}


export default ProgressCard