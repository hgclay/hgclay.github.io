import type { TechnicalProblem } from '../data/portfolioData'

export default function TechnicalProblemCard({ problem }: { problem: TechnicalProblem }) {
  return (
    <article className="rounded-xl border border-ink-700 bg-ink-900/60 p-5">
      <h3 className="text-base font-semibold text-ink-50">{problem.title}</h3>
      <p className="mt-2 text-sm text-ink-400">{problem.description}</p>
    </article>
  )
}
