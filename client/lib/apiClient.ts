// Axios interceptors

import axios from "axios"
import { getSession } from "next-auth/react"

const apiClient = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL })

apiClient.interceptors.request.use(
    async (config) => {
        if (config.url?.startsWith(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api`)) {
            const session = await getSession()
            const accessToken = session?.accessToken
            accessToken && config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    }, (err) => { return Promise.reject(err) }
)