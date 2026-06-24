import type { PersonalProject } from '../data/portfolioData'
import StatusBadge from './StatusBadge'
import SkillBadge from './SkillBadge'

export default function ProjectCard({ project }: { project: PersonalProject }) {
  return (
    <article className="flex flex-col rounded-xl border border-ink-700 bg-ink-900/60 p-6">
      <div className="flex flex-wrap items-center gap-2">
        {project.statuses.map((status) => (
          <StatusBadge key={status} status={status} />
        ))}
      </div>

      <h3 className="mt-4 text-xl">{project.name}</h3>
      <p className="mt-3 text-sm text-ink-400">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="mt-5 flex h-32 items-center justify-center rounded-lg border border-dashed border-ink-700 bg-ink-950 text-xs text-ink-600"
      >
        Screenshots coming soon
      </div>
    </article>
  )
}
