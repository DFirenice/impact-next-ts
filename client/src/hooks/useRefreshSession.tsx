'use client'

import { useCallback } from "react"
import { useSession } from "next-auth/react"
import authApiClient from "@root/lib/authApiClient"

const useRefreshSession = () => {
    const { data, update: updateSession } = useSession()

    const refreshSession = useCallback(async () => {
        console.log('Session update executed!', data)
        try {
            const res = await authApiClient.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-user`)
            const user = res.data?.user
    
            if (user) { updateSession(user) }
    
        } catch (err) { console.error('Error refreshing user session!: ', err) }
    }, [ updateSession, data ])

    return { refreshSession }
}

export default useRefreshSession