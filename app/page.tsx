import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">train-lle Guide</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The ultimate guide to building machine learning models locally with Node.js.
          Learn from zero to advanced with hands-on examples and practical projects.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/guide/intro/what-is-train-lle"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg"
          >
            Get Started
          </Link>
          <Link
            href="/guide/cli/train-lle-init"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg"
          >
            View CLI Docs
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-blue-600 font-bold text-xl">1</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Introduction</h3>
          <p className="text-gray-600 text-sm">
            Learn what train-lle is and why local ML matters for privacy and performance.
          </p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 font-bold text-xl">2</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Your First Model</h3>
          <p className="text-gray-600 text-sm">
            Build and train your first neural network with step-by-step guidance.
          </p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-purple-600 font-bold text-xl">3</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Real Projects</h3>
          <p className="text-gray-600 text-sm">
            Apply your knowledge with practical projects like price prediction and classifiers.
          </p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-orange-600 font-bold text-xl">4</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">CLI Mastery</h3>
          <p className="text-gray-600 text-sm">
            Master the command-line interface for efficient ML workflows.
          </p>
        </div>
      </div>

      <div className="mt-20 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose train-lle?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-600">
              Keep your data local and secure. No cloud dependencies or data sharing.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
            <p className="text-gray-600">
              Train models directly on your machine with minimal resource usage.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
            <p className="text-gray-600">
              Built with TypeScript and Node.js. Easy to integrate into your projects.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of developers building AI locally with train-lle.
        </p>
        <Link
          href="/guide/intro/what-is-train-lle"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg"
        >
          Start Your ML Journey
        </Link>
      </div>
    </div>
  )
}