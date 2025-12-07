import { notFound } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Callout from '@/components/Callout'
import PrevNextNav from '@/components/PrevNextNav'

const components = {
  Callout,
}

export default async function GuidePage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`)

  try {
    const source = await fs.readFile(filePath, 'utf8')

    return (
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <pre>{source}</pre>
        </article>
        <PrevNextNav currentSlug={slug} />
      </div>
    )
  } catch {
    notFound()
  }
}

export async function generateStaticParams() {
  // This would need to be implemented to generate all paths
  return []
}