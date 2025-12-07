import Link from 'next/link'
import { ArrowRight, Github, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            train-lle
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Local Learning Engine for Node.js
          </p>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            A lightweight, privacy-focused machine learning library that runs entirely in your browser or Node.js environment.
            Keep your data secure and private with local-first computation.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Install</h2>
            <code className="bg-gray-100 dark:bg-gray-700 px-3 sm:px-4 py-2 rounded text-sm font-mono block sm:inline">
              npm install train-lle
            </code>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Start</h2>
            <pre className="bg-gray-100 dark:bg-gray-700 p-3 sm:p-4 rounded text-xs sm:text-sm font-mono text-left overflow-x-auto">
{`import { Model, Trainer, Dataset } from 'train-lle';

// Create a simple model
const model = new Model({
  layers: [
    { type: 'dense', units: 1, activation: 'linear' }
  ]
});

// Load your data
const dataset = new Dataset([
  { input: [1], output: [2] },
  { input: [2], output: [4] },
  { input: [3], output: [6] },
  { input: [4], output: [8] }
]);

// Train the model
const trainer = new Trainer(model, dataset);
trainer.train({ epochs: 100 });

// Make a prediction
const prediction = model.predict([5]);
console.log(prediction); // Should be close to [10]`}
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://github.com/students-dev/train-lle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors text-sm sm:text-base"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </div>

          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Local-First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All computation happens locally in your environment. No data is sent to external servers.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Privacy-First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your training data never leaves your machine, ensuring complete privacy and security.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Simple API</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designed with simplicity in mind, making machine learning accessible to developers of all levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 sm:mt-16">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 train-lle. Licensed under Apache 2.0.</p>
            <a
              href="https://github.com/students-dev/train-lle-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-100 block sm:inline mt-2 sm:mt-0 sm:ml-4"
            >
              Documentation Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}