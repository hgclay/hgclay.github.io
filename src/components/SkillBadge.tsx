export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-ink-700 bg-ink-900 px-2.5 py-1 text-xs font-mono text-ink-200">
      {label}
    </span>
  )
}
