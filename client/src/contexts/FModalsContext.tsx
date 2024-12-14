'use client'

import { createContext, useContext, useState } from "react"

type TFModalsContext = {
    modals: React.ReactNode
    setModals: (newValue: React.ReactNode) => void
}

const FModalsContext = createContext<TFModalsContext | undefined>(undefined)

export const FModalsProvider = ({ children }: { children: React.ReactNode }) => {
    const [ modals, setModals ] = useState<React.ReactNode>()

    return <FModalsContext.Provider value={{ modals, setModals }}>
        {children}
    </FModalsContext.Provider>
}

export const useFModals = () => {
    const context = useContext(FModalsContext)

    if (!context) {
        throw new Error('useFModals must be used within FindProvider')
    }
    return context
}