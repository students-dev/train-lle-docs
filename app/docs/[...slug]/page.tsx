import { notFound } from 'next/navigation'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import DocsLayout from '@/components/DocsLayout'

const contentDirectory = join(process.cwd(), 'content')

export async function generateStaticParams() {
  const files = readdirSync(contentDirectory)
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: [file.replace('.mdx', '')]
    }))
}

async function getDocContent(slug: string[]) {
  const fileName = slug.join('/') + '.mdx'
  const filePath = join(contentDirectory, fileName)

  try {
    const fileContents = readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    return { frontmatter: data, content }
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const doc = await getDocContent(params.slug)
  if (!doc) return {}

  return {
    title: `${doc.frontmatter.title} | train-lle Documentation`,
    description: doc.frontmatter.description || 'Documentation for train-lle, the Local Learning Engine for Node.js',
  }
}

export default async function DocsPage({ params }: { params: { slug: string[] } }) {
  const doc = await getDocContent(params.slug)

  if (!doc) {
    notFound()
  }

  return (
    <DocsLayout>
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">{doc.frontmatter.title}</h1>
        <MDXRemote source={doc.content} />
      </article>
    </DocsLayout>
  )
}