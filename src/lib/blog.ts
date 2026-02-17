import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const wordCount = content.split(/\s+/g).length
      const readingTime = `${Math.ceil(wordCount / 200)} Min. Lesezeit`

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        category: data.category || '',
        readingTime,
        content,
      }
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug)
}
