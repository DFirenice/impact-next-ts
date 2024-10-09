'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import useTheme from "@/hooks/useTheme"

import Drawer from '@/components/Drawer/Drawer'

import css from './styles.module.css'

export default function AppLayout ({ children }: { children: React.ReactNode }) {
    // Theme Initializer
    useTheme()
    
    const { data: session } = useSession()
    const router = useRouter()

    if (session !== null) {
        return <div className={css.layout}>
            <Drawer/>
            {children}
        </div>
    }
    
    router.replace('/auth')
    return null
}