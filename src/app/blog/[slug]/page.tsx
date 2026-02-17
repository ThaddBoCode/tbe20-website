import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { BlogContent } from './BlogContent'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Button href="/blog" variant="outline" size="sm" className="mb-8">
            <ArrowLeft className="mr-1 w-4 h-4" />
            Zurück zum Blog
          </Button>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>

          {post.category && (
            <span className="inline-block text-xs font-semibold text-primary-500 bg-primary-50 px-2 py-1 rounded mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <BlogContent content={post.content} />
        </div>
      </Container>
    </section>
  )
}
