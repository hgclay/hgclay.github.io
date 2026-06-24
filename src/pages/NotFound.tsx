import { Link } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta('Page not found — Hannah Clay', 'This page could not be found.')

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="coord-label">404 — Off course</p>
      <h1 className="mt-3 text-3xl">Page not found</h1>
      <p className="mt-3 text-ink-400">The route you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 rounded-md border border-route-500/40 px-5 py-2.5 text-sm font-semibold text-route-400">
        Back home
      </Link>
    </div>
  )
}
