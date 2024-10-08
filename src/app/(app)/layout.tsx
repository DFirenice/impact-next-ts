'use client'

import { DragDropContext } from "react-beautiful-dnd"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useCTask } from "@/contexts/CurrentTask"
import useTheme from "@/hooks/useTheme"

import Drawer from '@/components/Drawer/Drawer'

import css from './styles.module.css'

export default function AppLayout ({ children }: { children: React.ReactNode }) {
    // Theme Initializer
    useTheme()
    
    const { data: session } = useSession()
    const router = useRouter()

    const { setCTask } = useCTask()

    // DND
    const handleDragEnd = (result: any) => {
        if (!result.destination) {
            return setCTask(null)
        }

        if(
            result.source.droppableId === result.destination.droppableId
            || result.source.index === result.destination.index
        ) {
            return
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