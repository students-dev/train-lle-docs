import { promises as fs } from 'fs'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import Callout from '@/components/Callout'
import PrevNextNav from '@/components/PrevNextNav'

export default async function GuidePage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const filePath = path.join(process.cwd(), 'app', 'content', `${slug}.mdx`)

  try {
    // Check if file exists
    await fs.access(filePath)
    const source = await fs.readFile(filePath, 'utf8')

    if (!source || source.trim() === '') {
      throw new Error('Empty file content')
    }

    // Convert MDX to HTML using remark
    const processor = unified()
      .use(remarkParse)
      .use(remarkHtml, { sanitize: false })

    const htmlContent = await processor.process(source)
    const htmlString = htmlContent.toString()

    return (
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </article>
        <PrevNextNav currentSlug={slug} />
      </div>
    )
  } catch (error) {
    console.error(`Error loading page ${slug}:`, error)
    return (
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested page could not be loaded.</p>
          <p className="text-sm text-gray-500 mt-2">Slug: {slug}</p>
        </div>
      </div>
    )
  }
}