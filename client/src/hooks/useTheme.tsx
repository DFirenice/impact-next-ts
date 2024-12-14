'use client'

import { useState, useEffect } from "react"

import type { Tthemes } from "@/types/theme"

const useTheme = () => {
    const [ theme, setTheme ] = useState<Tthemes>(
        () => (localStorage.getItem('theme') as Tthemes) || 'dark'
    )

    useEffect(() => {
        const definedTheme = theme === 'system' ?
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
            : theme
        
        document.documentElement.setAttribute('data-theme', definedTheme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return { theme, setTheme }
}

export default useTheme