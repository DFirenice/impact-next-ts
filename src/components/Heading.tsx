type HeadingProps = {
    children: React.ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
    size?: 'massive'
        | 'larger'
        | 'large'
        | 'small'
        | 'default'
}

export default function Heading (
    { children,
      size = 'default',
      level = 2 }
:HeadingProps) {
    const Tag:React.ElementType = `h${level}`
    return <Tag data-font-size={size} className="heading">
        {children}
    </Tag>
}