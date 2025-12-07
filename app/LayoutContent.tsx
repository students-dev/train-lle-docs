'use client'

import { usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-6 py-6 md:px-12 md:py-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}