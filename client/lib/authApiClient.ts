// Axios interceptor to secure routes

import axios from "axios"
import { getSession } from "next-auth/react"

const authApiClient = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api` })

authApiClient.interceptors.request.use(
    async (config) => {
        const session = await getSession()
        const accessToken = session?.accessToken

        if (accessToken) { config.headers.Authorization = `Bearer ${accessToken}` }
        
        return config
    }, (err) => { return Promise.reject(err) }
)

export default authApiClient