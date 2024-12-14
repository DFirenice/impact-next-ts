'use client'

import { createContext, useContext, useState } from 'react'

import type TaskCardProps from '@/components/TaskCard/TaskCard.types'
import tempUserTasks from '@/data/tempUserTasks'

type TCTaskContext = {
    CTask: TaskCardProps | null
    setCTask: (newTask: TaskCardProps | null) => void
}

const CTaskContext = createContext<TCTaskContext | null>(null)

export const CTaskProvider = ({ children }: { children: React.ReactNode }) => {
    // Initial state holds the first task or null
    const [CTask, setCTask] = useState<TaskCardProps | null>(tempUserTasks[0])

    return (
        <CTaskContext.Provider value={{ CTask, setCTask }}>
            {children}
        </CTaskContext.Provider>
    )
}

export const useCTask = () => {
    const ctx = useContext(CTaskContext)
    
    if (!ctx) {
        throw new Error('useTaskContext must be used within a TaskProvider')
    }

    return ctx
}