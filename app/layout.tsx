import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LayoutContent from './LayoutContent'

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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <LayoutContent>{children}</LayoutContent>
          <Footer />
        </div>
      </body>
    </html>
  )
}