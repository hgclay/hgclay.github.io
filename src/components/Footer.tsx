import { contact } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-xs text-ink-600">
        <p className="coord-label">End of route</p>
        <p>
          &copy; {new Date().getFullYear()} Hannah Clay · Built with React, Vite &amp; Tailwind · Deployed on GitHub
          Pages
        </p>
        <a href={`mailto:${contact.email}`} className="hover:text-route-400">
          {contact.email}
        </a>
      </div>
    </footer>
  )
}
