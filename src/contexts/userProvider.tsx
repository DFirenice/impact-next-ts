'use client'

import { createContext, useContext } from 'react'

type userData = {
    username: string
    authorized: boolean
} | undefined

// Temporary Hardcoded user
const user: userData = {
    username: 'Firenic',
    authorized: true
}

const UserContext = createContext<userData>(user)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => useContext(UserContext)