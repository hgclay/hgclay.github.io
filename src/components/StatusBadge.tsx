type Status = 'In Development' | 'Private Beta' | 'Coming Soon' | 'App Store Planned' | 'Concept'

const STYLES: Record<Status, string> = {
  'In Development': 'bg-route-500/10 text-route-400 border-route-500/30',
  'Private Beta': 'bg-amber-500/10 text-amber-500 border-amber-500/30',
  'Coming Soon': 'bg-ink-600/30 text-ink-200 border-ink-600',
  'App Store Planned': 'bg-route-500/10 text-route-400 border-route-500/30',
  Concept: 'bg-ink-600/30 text-ink-200 border-ink-600',
}

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${STYLES[status]}`}
    >
      {status}
    </span>
  )
}
