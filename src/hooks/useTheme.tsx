'use client'

import { useState, useEffect } from "react"

import type { Tthemes } from "@/types/theme"

const useTheme = () => {
    const [ theme, setTheme ] = useState<Tthemes>(
        () => (localStorage.getItem('theme') as Tthemes) || 'dark'
    )

    // 'default' theme initializer
    // useEffect(() => {
    //     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    //     setTheme(systemTheme)
    // }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return { theme, setTheme }
}

export default useTheme