import { contact } from '../data/portfolioData'

const items = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: (
      <path d="M3 6.5 12 13l9-6.5M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    ),
  },
  {
    label: 'GitHub',
    value: 'hgclay',
    href: contact.github,
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.35 4.69-4.58 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    href: contact.linkedin,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.84v1.71h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.82 2.67 4.82 6.14V21h-4v-5.62c0-1.34-.02-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21h-4V9Z" />
    ),
  },
  {
    label: 'Location',
    value: contact.location,
    href: undefined,
    icon: (
      <path d="M12 22s7-6.16 7-12a7 7 0 1 0-14 0c0 5.84 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    ),
  },
]

export default function ContactLinks() {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-route-400" aria-hidden="true">
            {item.icon}
          </svg>
          <div>
            <p className="coord-label">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="text-sm text-ink-100 hover:text-route-400">
                {item.value}
              </a>
            ) : (
              <p className="text-sm text-ink-100">{item.value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
