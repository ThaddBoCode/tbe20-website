import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogContentProps {
  content: string
}

export async function BlogContent({ content }: BlogContentProps) {
  return (
    <article
      className="
        prose prose-lg max-w-none
        prose-gray

        prose-headings:font-bold
        prose-headings:text-gray-900
        prose-headings:tracking-tight

        prose-h2:text-2xl
        prose-h2:mt-12
        prose-h2:mb-4
        prose-h2:pb-2
        prose-h2:border-b
        prose-h2:border-gray-200

        prose-h3:text-xl
        prose-h3:mt-8
        prose-h3:mb-3

        prose-p:text-gray-600
        prose-p:leading-relaxed

        prose-a:text-primary-500
        prose-a:font-medium
        prose-a:no-underline
        hover:prose-a:underline

        prose-strong:text-gray-900
        prose-strong:font-semibold

        prose-ul:my-4
        prose-ol:my-4
        prose-li:text-gray-600
        prose-li:leading-relaxed
        prose-li:marker:text-primary-400

        prose-blockquote:border-primary-400
        prose-blockquote:bg-primary-50/50
        prose-blockquote:rounded-r-lg
        prose-blockquote:py-1
        prose-blockquote:not-italic

        prose-code:text-primary-600
        prose-code:bg-primary-50
        prose-code:px-1.5
        prose-code:py-0.5
        prose-code:rounded
        prose-code:text-sm
        prose-code:font-normal
        prose-code:before:content-none
        prose-code:after:content-none

        prose-pre:bg-gray-900
        prose-pre:rounded-xl

        prose-hr:border-gray-200
        prose-hr:my-10

        prose-img:rounded-xl
        prose-img:shadow-lg
      "
    >
      <MDXRemote source={content} />
    </article>
  )
}
