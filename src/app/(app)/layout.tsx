'use client'

import { useRouter } from "next/navigation"
import { useUser } from '@/contexts/userProvider'
import Drawer from '@/components/Drawer/Drawer'

import css from './styles.module.css'

export default function AppLayout ({ children }: { children: React.ReactNode }) {
    const router = useRouter(),
        user = useUser()

    if (user && user.authorized) {
        return <div className={css.layout}>
            <Drawer/>
            {children}
        </div>
    }
    
    router.replace('/auth')
    return null
}