import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LayoutContent from './LayoutContent'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'train-lle',
  description: 'Local Learning Engine for Node.js - Train ML models privately on your machine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            <LayoutContent>{children}</LayoutContent>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}