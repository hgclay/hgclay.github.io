import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../data/portfolioData'
import SkillBadge from '../components/SkillBadge'
import useDocumentMeta from '../hooks/useDocumentMeta'
import NotFound from './NotFound'

const BULLET_SECTIONS: { heading: string; key: 'myRole' | 'technicalHighlights' | 'challenges' | 'impact' }[] = [
  { heading: 'My Role', key: 'myRole' },
  { heading: 'Technical Highlights', key: 'technicalHighlights' },
  { heading: 'Challenges', key: 'challenges' },
  { heading: 'Impact', key: 'impact' },
]

export default function CaseStudy() {
  const { slug } = useParams()
  const caseStudy = caseStudies.find((entry) => entry.slug === slug)

  useDocumentMeta(
    caseStudy ? `${caseStudy.title} — Case Study — Hannah Clay` : 'Case study not found — Hannah Clay',
    caseStudy ? caseStudy.tagline || caseStudy.title : 'This case study could not be found.',
  )

  if (!caseStudy) return <NotFound />

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link to="/#experience" className="coord-label text-route-400 hover:text-route-300">
        ← Back to experience
      </Link>

      <p className="coord-label mt-8">{caseStudy.org}</p>
      <h1 className="mt-2 text-3xl sm:text-4xl">{caseStudy.title}</h1>

      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <SkillBadge key={tag} label={tag} />
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-xl text-ink-50">Overview</h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-200">
          {caseStudy.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {BULLET_SECTIONS.map(({ heading, key }) => (
        <section key={key} className="mt-12">
          <h2 className="text-xl text-ink-50">{heading}</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-200">
            {caseStudy[key].map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-route-400">
                  ›
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
