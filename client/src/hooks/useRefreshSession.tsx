'use client'

import { useSession } from "next-auth/react"
import authApiClient from "@root/lib/authApiClient"

const useRefreshSession = () => {
    const { data, update } = useSession()

    const refreshSession = async () => {
        try {
            const res = await authApiClient.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-user`)
            const user = res.data?.user
    
            if (user) {
                console.log(user)
                await update({
                    ...data,
                    user
                })
            }
    
        } catch (err) { console.error('Error refreshing user session!: ', err) }
    }

    return { refreshSession }
}

export default useRefreshSession