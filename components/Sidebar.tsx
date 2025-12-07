'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const sections = [
  {
    title: 'Introduction',
    items: [
      { title: 'What is train-lle?', slug: 'intro/what-is-train-lle' },
      { title: 'Local Learning Engine', slug: 'intro/local-learning-engine' },
      { title: 'Why Local ML Matters', slug: 'intro/why-local-ml' },
      { title: 'What You Will Build', slug: 'intro/what-you-will-build' },
    ],
  },
  {
    title: 'Setting Up',
    items: [
      { title: 'System Requirements', slug: 'setup/system-requirements' },
      { title: 'Installing Node.js', slug: 'setup/installing-nodejs' },
      { title: 'Creating a Project', slug: 'setup/creating-project' },
      { title: 'Installing train-lle', slug: 'setup/installing-train-lle' },
      { title: 'Running Your First Script', slug: 'setup/first-script' },
    ],
  },
  {
    title: 'Your First Model',
    items: [
      { title: 'What is a Model?', slug: 'first-model/what-is-model' },
      { title: 'Creating an MLP', slug: 'first-model/creating-mlp' },
      { title: 'Preparing a Dataset', slug: 'first-model/preparing-dataset' },
      { title: 'Training Your First Model', slug: 'first-model/training-model' },
      { title: 'Making Predictions', slug: 'first-model/making-predictions' },
      { title: 'Saving and Loading', slug: 'first-model/saving-loading' },
    ],
  },
  // Add more sections as needed
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 hidden md:block">
      <nav className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/guide/${item.slug}`}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      pathname === `/guide/${item.slug}`
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}