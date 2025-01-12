'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import useTheme from "@/hooks/useTheme"

import App from "./App"

type TChildren = { children: React.ReactNode }

export default function AppLayout ({ children }: TChildren) {
    useTheme() // Theme Initializer
    
    const { data: session } = useSession()
    const router = useRouter()

    if (session !== null) {
        return <App>{children}</App>
    }
    
    router.replace('/auth')
    return null
}