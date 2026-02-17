import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogContentProps {
  content: string
}

export async function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-gray prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary-500 prose-strong:text-gray-900">
      <MDXRemote source={content} />
    </article>
  )
}
