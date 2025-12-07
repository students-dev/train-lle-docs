'use client'

import { useState, useEffect } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import Fuse from 'fuse.js'

interface SearchResult {
  title: string
  href: string
  content: string
}

const searchData: SearchResult[] = [
  { title: 'Getting Started', href: '/docs/getting-started', content: 'Welcome to train-lle, the Local Learning Engine for Node.js. Installation and quick start guide.' },
  { title: 'Core Concepts', href: '/docs/core-concepts', content: 'Learn about the fundamental concepts of train-lle including models, datasets, training loops, loss functions, and optimizers.' },
  { title: 'CLI Reference', href: '/docs/cli', content: 'Command line interface reference for train-lle including init, train, test, export, and stats commands.' },
  { title: 'API Reference', href: '/docs/api', content: 'Complete API reference for Model, Trainer, Dataset, Tensor, Optimizer, and Loss classes.' },
  { title: 'Model Types', href: '/docs/models', content: 'Available model architectures including MLP (Dense), CNN, and RNN.' },
  { title: 'Dataset Formats', href: '/docs/datasets', content: 'Supported dataset formats including CSV, JSON, Images. Audio and Video marked as planned.' },
  { title: 'Export System', href: '/docs/export', content: 'Learn about the .lle format for saving and loading trained models.' },
  { title: 'Examples', href: '/docs/examples', content: 'Code examples for tabular regression, basic image classification, and simple text sequence training.' },
  { title: 'Roadmap', href: '/docs/roadmap', content: 'Development roadmap including v0.1.0 (current), v0.2.0 (GPU), v0.5.0 (WASM), and v1.0.0 (Transformers).' },
  { title: 'Contributing', href: '/docs/contributing', content: 'How to contribute to train-lle including development setup, reporting issues, and feature requests.' },
  { title: 'License', href: '/docs/license', content: 'Apache 2.0 license information.' },
]

const fuse = new Fuse(searchData, {
  keys: ['title', 'content'],
  threshold: 0.3,
})

export function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (query.length > 0) {
      const searchResults = fuse.search(query).map(result => result.item)
      setResults(searchResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  return (
    <div className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50">
          <ul className="py-2">
            {results.map((result) => (
              <li key={result.href}>
                <a
                  href={result.href}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium">{result.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {result.content}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}