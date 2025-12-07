import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-4 pb-20">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">AI</span>
          </div>
          <div className="flex-1">
            <div className="bg-blue-50 rounded-lg p-4">
              <h1 className="text-3xl font-bold mb-4">Welcome to train-lle Guide! 👋</h1>
              <p className="text-lg text-gray-700 mb-6">
                I'm your AI guide to building machine learning models locally with Node.js.
                This comprehensive guide will take you from zero to advanced ML development.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/guide/intro/what-is-train-lle"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Get Started 🚀
                </Link>
                <Link
                  href="/guide/cli/train-lle-init"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium"
                >
                  CLI Docs 📖
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">📚</span>
          </div>
          <div className="flex-1">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3">Learning Path</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</span>
                  <div>
                    <h4 className="font-medium">Introduction</h4>
                    <p className="text-sm text-gray-600">What is train-lle?</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">2</span>
                  <div>
                    <h4 className="font-medium">Your First Model</h4>
                    <p className="text-sm text-gray-600">Build & train</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">3</span>
                  <div>
                    <h4 className="font-medium">Real Projects</h4>
                    <p className="text-sm text-gray-600">Price prediction, classifiers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">4</span>
                  <div>
                    <h4 className="font-medium">CLI Mastery</h4>
                    <p className="text-sm text-gray-600">Command-line tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">✨</span>
          </div>
          <div className="flex-1">
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3">Why train-lle?</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-medium mb-1">Privacy First</h4>
                  <p className="text-sm text-gray-600">Local data, no cloud</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-medium mb-1">Fast & Efficient</h4>
                  <p className="text-sm text-gray-600">Direct on-device training</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🛠️</div>
                  <h4 className="font-medium mb-1">Developer Friendly</h4>
                  <p className="text-sm text-gray-600">TypeScript + Node.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">🚀</span>
          </div>
          <div className="flex-1">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Ready to Start Your ML Journey?</h3>
              <p className="text-gray-600 mb-4">
                Join developers building AI locally with train-lle
              </p>
              <Link
                href="/guide/intro/what-is-train-lle"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-block"
              >
                Start Learning Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}