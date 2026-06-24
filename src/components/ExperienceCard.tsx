import { Link } from 'react-router-dom'
import type { ExperienceProject } from '../data/portfolioData'
import SkillBadge from './SkillBadge'

export default function ExperienceCard({ project }: { project: ExperienceProject }) {
  return (
    <article className="flex flex-col rounded-xl border border-ink-700 bg-ink-900/60 p-6 transition hover:border-route-500/40">
      <p className="coord-label">{project.org}</p>
      <h3 className="mt-2 text-xl">{project.title}</h3>
      <p className="mt-3 text-sm text-ink-400">{project.summary}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-ink-200">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span aria-hidden="true" className="text-route-400">
              ›
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>

      {project.caseStudySlug && (
        <Link
          to={`/case-study/${project.caseStudySlug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-route-400 hover:text-route-300"
        >
          Read full case study →
        </Link>
      )}
    </article>
  )
}
