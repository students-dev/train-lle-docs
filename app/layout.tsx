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
            <main className="flex-1 px-4 py-8 md:px-8">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}