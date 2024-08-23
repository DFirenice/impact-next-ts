import { usePathname } from "next/navigation"

export const useActiveLink = (link: string, styles: string = 'btn-fill') => {
    const pathname = usePathname()
    return pathname === link ? styles : ''
}