'use client'

import { createContext, useContext, useState } from 'react'

type TSortingContext = {
    sortingMethod: string
    setSortingMethod: (newValue: string) => void
}

const SortingContext = createContext<TSortingContext | undefined>(undefined)

// provider
export const SortingProvider = ({ children }: { children: React.ReactNode }) => {
    const [ sortingMethod, setSortingMethod ] = useState('Name')
    return <SortingContext.Provider value={{ sortingMethod, setSortingMethod }}>
        {children}
    </SortingContext.Provider>
}

// useContext
export const useSorting = ():TSortingContext => {
    const context = useContext(SortingContext)

    if (!context) {
        throw new Error('useSorting must be used within SortingProvider')
    }
    
    return context
}