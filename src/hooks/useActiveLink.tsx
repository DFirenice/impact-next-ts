import { usePathname } from "next/navigation"

export const useActiveLink = (link: string) => {
    const pathname = usePathname()
    return pathname === link ? 'btn-fill' : ''
}