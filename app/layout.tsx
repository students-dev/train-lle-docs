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
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <Navbar />
          <div className="flex h-screen pt-16">
            <Sidebar />
            <main className="flex-1 overflow-y-auto px-6 py-6 md:px-12 md:py-8">
              <div className="max-w-4xl mx-auto">
                {children}
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}