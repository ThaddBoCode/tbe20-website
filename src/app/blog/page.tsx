import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Microsoft Dynamics 365 Tipps & Insights',
  description:
    'Praxistipps und Insights zu Microsoft Dynamics 365, Power Platform und Digitalisierung. Regelmäßige Artikel von einem erfahrenen Berater.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          label="Blog"
          title="Insights & Praxistipps"
          description="Regelmäßige Artikel zu Microsoft Dynamics 365, Power Platform und Digitalisierung."
        />

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Bald erscheinen hier die ersten Artikel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full flex flex-col group">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  {post.category && (
                    <span className="inline-block text-xs font-semibold text-primary-500 bg-primary-50 px-2 py-1 rounded mb-3 self-start">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 flex-1">{post.description}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary-500 mt-4">
                    Weiterlesen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
