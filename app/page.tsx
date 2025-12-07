import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">train-lle Guide</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Learn to build machine learning models locally with Node.js
        </p>
        <Link
          href="/guide/intro/what-is-train-lle"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
        >
          Start Learning
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Beginner Friendly</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Start from zero knowledge and build your first ML model in minutes.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Hands-On Learning</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Every section includes working code examples you can run locally.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Offline First</h3>
          <p className="text-gray-600 dark:text-gray-400">
            No internet required - train models entirely on your machine.
          </p>
        </div>
      </div>
    </div>
  )
}