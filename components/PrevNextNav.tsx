import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PrevNextNavProps {
  currentSlug: string
}

const navigation = [
  'intro/what-is-train-lle',
  'intro/local-learning-engine',
  'intro/why-local-ml',
  'intro/what-you-will-build',
  'setup/system-requirements',
  'setup/installing-nodejs',
  'setup/creating-project',
  'setup/installing-train-lle',
  'setup/first-script',
  'first-model/what-is-model',
  'first-model/creating-mlp',
  'first-model/preparing-dataset',
  'first-model/training-model',
  'first-model/making-predictions',
  'first-model/saving-loading',
  // Add more as needed
]

export default function PrevNextNav({ currentSlug }: PrevNextNavProps) {
  const currentIndex = navigation.indexOf(currentSlug)
  const prev = currentIndex > 0 ? navigation[currentIndex - 1] : null
  const next = currentIndex < navigation.length - 1 ? navigation[currentIndex + 1] : null

  return (
    <nav className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      {prev ? (
        <Link
          href={`/guide/${prev}`}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/guide/${next}`}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}