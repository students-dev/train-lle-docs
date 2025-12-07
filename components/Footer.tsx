export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 train-lle. Built with Next.js and Tailwind CSS.</p>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <a
            href="https://vercel.com?utm_source=train-lle&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block opacity-75 hover:opacity-100 transition-opacity"
          >
            <img
              src="https://vercel.com/button"
              alt="Powered by Vercel"
              className="h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}