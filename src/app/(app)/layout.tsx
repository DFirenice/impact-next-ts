'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Drawer from '@/components/Drawer/Drawer'

import css from './styles.module.css'

export default function AppLayout ({ children }: { children: React.ReactNode }) {
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