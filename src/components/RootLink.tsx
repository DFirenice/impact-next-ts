import { useActiveLink } from "@/hooks/useActiveLink"
import Btn from "@/components/UI/Btn/Btn"

const RootLink = (
    { link, children, classes = ''}:
    { link: string, children?: React.ReactNode, classes?: string }) => {
    return <Btn
        link={link.at(-1) === '*' ? link.slice(0, -2) : link}
        classes={`${classes} ${useActiveLink(link)}`}
    >
        {children}
    </Btn>
}

export default RootLink