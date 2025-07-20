import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Layout } from "@/components/Layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trip Tuner",
  description: "Plan your next adventure with ease",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'