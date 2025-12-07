import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'train-lle Guide',
  description: 'Local Learning Engine for Node.js - Complete Learning Guide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white text-gray-900">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 px-6 py-6 md:px-12 md:py-8 max-w-4xl">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}