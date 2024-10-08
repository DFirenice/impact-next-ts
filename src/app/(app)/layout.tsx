'use client'

import { DragDropContext } from "react-beautiful-dnd"
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

    // DND
    const handleDragEnd = (result: any) => {
        if (!result.destination) {
            return console.log('abort current task')
        }
    }

    if (session !== null) {
        return <div className={css.layout}>
            <Drawer/>
            <DragDropContext onDragEnd={handleDragEnd}>
                {children}
            </DragDropContext>
        </div>
    }
    
    router.replace('/auth')
    return null
}