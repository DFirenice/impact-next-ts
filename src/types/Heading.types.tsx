export type HeadingSizes = 'massive'
        | 'larger'
        | 'large'
        | 'small'
        | 'default'

export type HeadingProps = {
    children: React.ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
    size?: HeadingSizes
}
