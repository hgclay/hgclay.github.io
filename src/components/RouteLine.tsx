/** Decorative animated route-line accent, evoking a flight path / map route. */
export default function RouteLine({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="-45 -5 480 56"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 30 C 80 30, 100 10, 180 10 S 280 30, 400 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        className="text-route-500/60"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="3s" repeatCount="indefinite" />
      </path>
      <g transform="translate(-25, 29) rotate(70) scale(1.3) translate(-11.5, -12)">
        <path
          d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
          fill="currentColor"
          className="text-route-400"
        />
      </g>
      <g transform="translate(420, 10) scale(1.2, 1.75)">
        <path
          d="M0 -3 C -2 -6 -6 -6 -6 -2 C -6 1 -3 4 0 6 C 3 4 6 1 6 -2 C 6 -6 2 -6 0 -3 Z"
          fill="currentColor"
          className="text-route-400"
        />
      </g>
    </svg>
  )
}
