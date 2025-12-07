'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const navigation = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
  },
  {
    title: 'Core Concepts',
    href: '/docs/core-concepts',
  },
  {
    title: 'CLI Reference',
    href: '/docs/cli',
  },
  {
    title: 'API Reference',
    href: '/docs/api',
  },
  {
    title: 'Model Types',
    href: '/docs/models',
  },
  {
    title: 'Dataset Formats',
    href: '/docs/datasets',
  },
  {
    title: 'Export System',
    href: '/docs/export',
  },
  {
    title: 'Examples',
    href: '/docs/examples',
  },
  {
    title: 'Roadmap',
    href: '/docs/roadmap',
  },
  {
    title: 'Contributing',
    href: '/docs/contributing',
  },
  {
    title: 'License',
    href: '/docs/license',
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          train-lle
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          v0.1.0
        </p>
      </div>

      <nav className="px-3">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <ChevronRight className="h-4 w-4 mr-2" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-200 dark:border-gray-700 mt-6">
        <a
          href="https://github.com/students-dev/train-lle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  )
}