import type { HeadingProps } from "@/types/Heading.types"

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