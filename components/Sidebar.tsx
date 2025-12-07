'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

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
  {
    title: 'Understanding Data',
    items: [
      { title: 'CSV Datasets', slug: 'data/csv-datasets' },
      { title: 'JSON Datasets', slug: 'data/json-datasets' },
      { title: 'Image Datasets', slug: 'data/image-datasets' },
      { title: 'Preprocessing Basics', slug: 'data/preprocessing-basics' },
      { title: 'Splitting Train/Test Sets', slug: 'data/splitting-train-test' },
    ],
  },
  {
    title: 'Training Deeply',
    items: [
      { title: 'Epochs', slug: 'training/epochs' },
      { title: 'Learning Rate', slug: 'training/learning-rate' },
      { title: 'Overfitting vs Underfitting', slug: 'training/overfitting-underfitting' },
      { title: 'Loss Functions', slug: 'training/loss-functions' },
      { title: 'Optimizers', slug: 'training/optimizers' },
    ],
  },
  {
    title: 'Model Types',
    items: [
      { title: 'Dense (MLP)', slug: 'models/dense-mlp' },
      { title: 'CNN (Images)', slug: 'models/cnn-images' },
      { title: 'RNN (Sequences)', slug: 'models/rnn-sequences' },
      { title: 'When to Use Which', slug: 'models/when-to-use-which' },
    ],
  },
  {
    title: 'CLI Guide',
    items: [
      { title: 'train-lle init', slug: 'cli/train-lle-init' },
      { title: 'train-lle train', slug: 'cli/train-lle-train' },
      { title: 'train-lle test', slug: 'cli/train-lle-test' },
      { title: 'train-lle export', slug: 'cli/train-lle-export' },
      { title: 'train-lle stats', slug: 'cli/train-lle-stats' },
      { title: 'Full CLI Workflows', slug: 'cli/full-cli-workflows' },
    ],
  },
  {
    title: 'Export System (.lle)',
    items: [
      { title: 'What is the .lle Format?', slug: 'export/what-is-lle-format' },
      { title: 'Exporting Models', slug: 'export/exporting-models' },
      { title: 'Importing Models', slug: 'export/importing-models' },
      { title: 'Version Compatibility', slug: 'export/version-compatibility' },
    ],
  },
  {
    title: 'Real Projects (Cookbook)',
    items: [
      { title: 'House Price Prediction', slug: 'projects/house-price-prediction' },
      { title: 'Image Classifier', slug: 'projects/image-classifier' },
      { title: 'Text Sequence Predictor', slug: 'projects/text-sequence-predictor' },
      { title: 'Mini Recommendation System', slug: 'projects/mini-recommendation-system' },
    ],
  },
  {
    title: 'Errors & Debugging',
    items: [
      { title: 'Common Training Mistakes', slug: 'debugging/common-training-mistakes' },
      { title: 'Shape Mismatch Errors', slug: 'debugging/shape-mismatch-errors' },
      { title: 'Bad Loss Issues', slug: 'debugging/bad-loss-issues' },
      { title: 'Dataset Parsing Failures', slug: 'debugging/dataset-parsing-failures' },
    ],
  },
  {
    title: 'Performance & Limits',
    items: [
      { title: 'CPU Limitations', slug: 'performance/cpu-limitations' },
      { title: 'Batch Sizes', slug: 'performance/batch-sizes' },
      { title: 'Memory Usage', slug: 'performance/memory-usage' },
      { title: 'Model Size Limits', slug: 'performance/model-size-limits' },
    ],
  },
  {
    title: 'Roadmap & Future',
    items: [
      { title: 'GPU Support', slug: 'roadmap/gpu-support' },
      { title: 'WASM Runtime', slug: 'roadmap/wasm-runtime' },
      { title: 'ONNX Export', slug: 'roadmap/onnx-export' },
      { title: 'Distributed Training', slug: 'roadmap/distributed-training' },
    ],
  },
  {
    title: 'Contributing',
    items: [
      { title: 'How to Help', slug: 'contributing/how-to-help' },
      { title: 'Docs Contribution', slug: 'contributing/docs-contribution' },
      { title: 'Code Contribution', slug: 'contributing/code-contribution' },
      { title: 'Bug Report Flow', slug: 'contributing/bug-report-flow' },
    ],
  },
  {
    title: 'License',
    items: [
      { title: 'Apache 2.0 Explanation', slug: 'license/apache-2-0' },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'Introduction': true,
    'Setting Up': true,
  })

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 hidden md:block overflow-y-auto sticky top-16 h-screen">
      <nav className="space-y-2">
        {sections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <span>{section.title}</span>
              {openSections[section.title] ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {openSections[section.title] && (
              <ul className="ml-4 space-y-1 mt-1">
                {section.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/guide/${item.slug}`}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        pathname === `/guide/${item.slug}`
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}