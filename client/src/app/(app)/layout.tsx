'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import useFModal from "@/hooks/useFModal"
import useTheme from "@/hooks/useTheme"

import Drawer from '@/components/Drawer/Drawer'

import css from './styles.module.css'

export default function AppLayout ({ children }: { children: React.ReactNode }) {
    useTheme() // Theme Initializer
    
    const { data: session } = useSession()
    const { fModalPortal } = useFModal()
    const router = useRouter()

    if (session !== null) {
        return <div className={css.layout}>
            { fModalPortal() }
            <Drawer/>
            {children}
        </div>
    }
    
    router.replace('/auth')
    return null
}