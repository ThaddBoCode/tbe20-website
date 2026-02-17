import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { BlogContent } from './BlogContent'
import { ContactCTA } from '@/components/sections/ContactCTA'

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
    <>
      {/* Hero / Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-20 lg:pt-28 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Button href="/blog" variant="outline" size="sm" className="mb-8">
              <ArrowLeft className="mr-1 w-4 h-4" />
              Zurück zum Blog
            </Button>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-gray-300">&middot;</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
              {post.category && (
                <>
                  <span className="text-gray-300">&middot;</span>
                  <span className="inline-flex items-center gap-1.5 text-primary-500 font-medium">
                    <Tag className="w-3.5 h-3.5" />
                    {post.category}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>

            {post.description && (
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                {post.description}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <BlogContent content={post.content} />
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
