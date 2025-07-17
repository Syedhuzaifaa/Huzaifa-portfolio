import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Syed Huzaifa - Web Developer",
  description:
    "Portfolio of Syed Huzaifa - Expert Web Developer specializing in WordPress Custom Themes, Frontend (HTML, CSS, JS, React, Bootstrap, Tailwind, SASS), and Backend (Laravel, Next.js) development.",
  keywords: [
    "web developer",
    "portfolio",
    "WordPress",
    "Next.js",
    "Laravel",
    "React",
    "frontend",
    "backend",
    "full-stack",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "SQL",
  ],
  authors: [{ name: "Syed Huzaifa" }],
  openGraph: {
    title: "Syed Huzaifa - Web Developer",
    description: "Portfolio showcasing web development work, from custom themes to full-stack applications.",
    type: "website",
  },
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
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
