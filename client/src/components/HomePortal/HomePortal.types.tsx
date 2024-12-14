import type { Ticons } from "@/types/icons"

type HomePortalProps = {
    heading: string
    subtext: string
    icon: Ticons | undefined
    link?: string
    func?: () => void
}

export default HomePortalProps