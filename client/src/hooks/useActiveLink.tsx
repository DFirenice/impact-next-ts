import { usePathname } from "next/navigation"

export const useActiveLink = (link: string, styles: string = 'btn-fill'): string => {
    const pathname = usePathname()
    
    if (link.at(-1) === "*") {
        return pathname.startsWith(link.slice(0, -2)) ? styles : ''
    } else { return pathname === link ? styles : '' }
}