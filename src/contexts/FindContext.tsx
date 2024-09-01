'use client'

import { createContext, useContext, useState } from 'react'

type TFindContext = {
    findQuery: string
    setFindQuery: (newQuery: string) => void
}

const FindContext = createContext<TFindContext | undefined>(undefined)

// find provider
export const FindProvider = ({ children }: { children: React.ReactNode }) => {
    const [ findQuery, setFindQuery ] = useState('')
    return <FindContext.Provider value={{ findQuery, setFindQuery }}>
        {children}
    </FindContext.Provider>
}

// use hook
export const useFindQuery = () => {
    const context = useContext(FindContext)

    if (!context) {
        throw new Error('useFindQuery must be used within FindProvider')
    }
    return context
}