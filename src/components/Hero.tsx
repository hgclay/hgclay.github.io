import { hero } from '../data/portfolioData'
import RouteLine from './RouteLine'

export default function Hero() {
  return (
    <section className="grid-overlay relative overflow-hidden border-b border-ink-800 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="coord-label">35.7796° N · 78.6382° W — RDU</p>
        <h1 className="mt-4 text-4xl sm:text-6xl">{hero.name}</h1>
        <p className="mt-3 text-lg text-route-400 sm:text-xl">{hero.title}</p>
        <p className="mt-6 max-w-2xl text-base text-ink-400 sm:text-lg">{hero.tagline}</p>

        <RouteLine className="mt-10 h-8 w-full max-w-md text-route-500" />

        <div className="mt-8 flex flex-wrap gap-3">
          {hero.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              target={button.external ? '_blank' : undefined}
              rel={button.external ? 'noreferrer' : undefined}
              className={
                button.variant === 'primary'
                  ? 'rounded-md bg-route-500 px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-route-400'
                  : 'rounded-md border border-ink-700 px-5 py-2.5 text-sm font-semibold text-ink-100 hover:border-route-500/50 hover:text-route-400'
              }
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
