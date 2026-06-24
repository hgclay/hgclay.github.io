import { useEffect } from 'react'

/** Sets document title + meta description for the current route (lightweight SEO). */
export default function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [title, description])
}
