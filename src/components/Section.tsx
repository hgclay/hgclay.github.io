import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  index?: string
  kicker: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

/** Shared section shell: coordinate-style kicker label + heading + content. */
export default function Section({ id, index, kicker, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-baseline gap-3">
          {index && <span className="coord-label">{index}</span>}
          <span className="coord-label">{kicker}</span>
        </div>
        <h2 id={id ? `${id}-heading` : undefined} className="text-3xl sm:text-4xl">
          {title}
        </h2>
        {description && <p className="mt-4 max-w-2xl text-base text-ink-400">{description}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
