import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            train-lle
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            The most popular way to build machine learning models locally with Node.js.
            Keep your data private and train neural networks entirely on your machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/guide/intro/what-is-train-lle"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/sst/train-lle"
              className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 max-w-md mx-auto">
            <code className="text-gray-800 dark:text-green-400 text-lg">
              npm install train-lle
            </code>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why train-lle?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Build intelligent applications without compromising data privacy
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-600 dark:text-gray-400">Train models locally without sending data to the cloud</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
            <p className="text-gray-600 dark:text-gray-400">Direct on-device training with zero dependencies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
            <p className="text-gray-600 dark:text-gray-400">TypeScript support with intuitive API design</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your ML Journey?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join developers building AI locally with train-lle
          </p>
          <Link
            href="/guide/intro/what-is-train-lle"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Start Learning Now →
          </Link>
        </div>
      </div>
    </div>
  )
}