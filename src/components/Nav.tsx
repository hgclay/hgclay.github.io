import { Link } from 'react-router-dom'
import { hero, resumePath } from '../data/portfolioData'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-sm tracking-widest text-ink-50">
          {hero.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
          <span className="ml-2 hidden text-ink-400 sm:inline">{hero.name}</span>
        </Link>
        <ul className="flex items-center gap-5 text-sm">
          {links.map((link) => (
            <li key={link.label} className="hidden sm:block">
              <a href={link.href} className="text-ink-200 hover:text-route-400">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-route-500/40 bg-route-500/10 px-3 py-1.5 font-medium text-route-400 hover:bg-route-500/20"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
