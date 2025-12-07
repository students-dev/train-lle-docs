'use client'

import Link from 'next/link'
import { Search, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'
import SearchComponent from './Search'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          train-lle
        </Link>
        <div className="flex items-center space-x-4">
          <SearchComponent />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}