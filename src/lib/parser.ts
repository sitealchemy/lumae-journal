import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for gray-matter in browser
if (typeof window !== 'undefined' && !window.Buffer) {
  window.Buffer = Buffer;
}

export interface BookMetadata {
  title: string;
  subtitle?: string;
  order?: number;
  date?: string;
  excerpt?: string;
  slug: string;
}

export interface Book {
  metadata: BookMetadata;
  content: string;
  pages: string[];
}

export function parseMarkdown(slug: string, rawContent: string): Book {
  const { data, content } = matter(rawContent);
  
  // Split content by "---" (horizontal rule) to create pages
  // We filter out empty strings that might result from splitting
  const pages = content
    .split(/\n---\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return {
    metadata: {
      title: data.title || slug,
      subtitle: data.subtitle,
      order: data.order,
      date: data.date ? String(data.date) : undefined,
      excerpt: data.excerpt,
      slug,
    },
    content,
    pages: pages.length > 0 ? pages : [content],
  };
}
