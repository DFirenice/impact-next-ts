'use client'

import { useSession } from "next-auth/react"
import authApiClient from "@root/lib/authApiClient"

const useRefreshSession = async () => {
    const { update: updateSession } = useSession()
    console.log('Session update executed!')

    try {
        const res = await authApiClient.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-user`)
        const user = res.data?.user

        if (user) { updateSession(user) }

    } catch (err) { console.error('Error refreshing user session!: ', err) }
}

export default useRefreshSession