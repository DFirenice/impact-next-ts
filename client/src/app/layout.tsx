import type { Metadata } from "next"
import { Rubik } from "next/font/google"

import { SortingProvider } from "@/contexts/SortingContext"
import { FindProvider } from '@/contexts/FindContext'
import { TagsFilterProvider } from "@/contexts/TagsFilterContext"
import { FModalsProvider } from "@/contexts/FModalsContext"
import { CTaskProvider } from "@/contexts/CurrentTask"
import SessionWrapper from "@/components/SessionWrapper" // Next auth

import "./globals.css"
import './main.css'

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Impact Project",
  description: "Impact - powerful tool for your projects development"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
      <SessionWrapper>
        <html lang="en">
          <FModalsProvider>
            <SortingProvider>
              <FindProvider>
                <TagsFilterProvider>
                  <CTaskProvider>
                    <body className={rubik.className}>
                      {children}
                      <div id="modals"></div>
                      <div id="fmodals"></div>
                    </body>
                  </CTaskProvider>
                </TagsFilterProvider>
              </FindProvider>
            </SortingProvider>
          </FModalsProvider>
        </html>
      </SessionWrapper>
  )
}