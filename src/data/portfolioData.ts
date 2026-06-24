/**
 * Central content file for the portfolio site.
 * Edit copy here — components read from this file and don't hardcode text.
 */

// ---------------------------------------------------------------------------
// Contact / links — update these as they change.
// ---------------------------------------------------------------------------

export const contact = {
  email: 'fowlerhg@gmail.com',
  github: 'https://github.com/hgclay',
  linkedin: 'https://www.linkedin.com/in/hannah-fowler21/',
  location: 'Raleigh-Durham, NC / Remote',
}

export const resumePath = '/resume/Hannah-Clay-Resume.pdf'

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export interface HeroButton {
  label: string
  href: string
  variant: 'primary' | 'secondary'
  external?: boolean
}

export const hero = {
  name: 'Hannah Clay',
  title: 'Software Engineer | C++ • iOS • Geospatial Systems • Aviation Software',
  tagline:
    'I build reliable, data-heavy software across backend systems, mobile apps, and complex geospatial interfaces.',
  buttons: [
    { label: 'View Projects', href: '#experience', variant: 'primary' },
    { label: 'View Resume', href: resumePath, variant: 'secondary', external: true },
    { label: 'GitHub', href: contact.github, variant: 'secondary', external: true },
    { label: 'LinkedIn', href: contact.linkedin, variant: 'secondary', external: true },
  ] as HeroButton[],
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a software engineer with a Master's degree in Computer Science and 5+ years of experience.",
    'My background includes C++, Objective-C, Swift, SwiftUI, UIKit, Rust, C#, JavaScript, React, and backend/mobile integration work.',
    'I started in backend C++ development and later moved into iOS development, giving me strong end-to-end experience from system-level logic to user-facing applications.',
    'I enjoy working on complex, data-heavy products, improving legacy systems, and building software that is reliable, maintainable, and useful in real-world workflows.',
    "I'm especially interested in C++, backend systems, iOS, mapping/geospatial software, aviation technology, and developer tools.",
  ],
}

// ---------------------------------------------------------------------------
// Professional experience
// ---------------------------------------------------------------------------

export interface ExperienceProject {
  title: string
  org: string
  summary: string
  bullets: string[]
  skills: string[]
}

export const experience: ExperienceProject[] = [
  {
    title: 'Aviation Geospatial Mapping & Charting Engine',
    org: 'Boeing / Jeppesen',
    summary:
      'Contributed to a geospatial charting and mapping engine used in aviation software, focusing on reliable data rendering, API design, and integration between C++ systems and iOS application layers.',
    bullets: [
      'Worked on a C++/Objective-C/Swift geospatial mapping engine and API used in aviation Electronic Flight Bag workflows',
      'Supported flight visualization, navigation, charting, mapping, routing, search logic, and weather data display',
      'Worked on a cross-platform, multi-tenant library connecting lower-level C++ systems with iOS application layers',
    ],
    skills: ['C++', 'Objective-C', 'Swift', 'Geospatial rendering', 'API design', 'Mobile integration', 'Aviation software'],
  },
  {
    title: 'Jeppesen Aviator / Electronic Flight Bag Application',
    org: 'Boeing / Jeppesen',
    summary:
      'Worked on iOS features for an aviation EFB application, helping connect pilot-facing workflows with underlying charting, navigation, and aviation data systems.',
    bullets: [
      'Worked on iOS application features for a data-heavy aviation app',
      'Used Swift, SwiftUI, UIKit, Objective-C, and C++ integration',
      'Helped connect user-facing mobile workflows to underlying aviation data/charting systems',
    ],
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'C++ integration', 'iOS', 'Aviation software'],
  },
  {
    title: 'Weather Data Caching & Rendering Modernization',
    org: 'Boeing / Jeppesen',
    summary:
      'Modernized a legacy weather-data component by introducing Rust-based caching and retrieval logic, improving reliability and maintainability while integrating with existing C++ systems.',
    bullets: [
      'Rewrote/modernized a legacy library using Rust to cache, retrieve, and render large-scale weather data',
      'Integrated Rust with existing C++ libraries through shared interfaces/APIs',
      'Improved memory safety, retrieval performance, and maintainability',
    ],
    skills: ['Rust', 'C++', 'Caching', 'Data pipelines', 'Performance', 'System modernization', 'Legacy refactoring'],
  },
  {
    title: 'Flight Plan Ingestion & Logging Improvements',
    org: 'Boeing / Jeppesen',
    summary:
      'Improved flight-plan data handling and logging workflows to make complex aviation software easier to validate, debug, and maintain.',
    bullets: [
      'Worked with XML flight plan ingestion/validation',
      'Improved logging readability and performance',
      'Helped make hard-to-debug system behavior easier to trace',
    ],
    skills: ['XML', 'Debugging', 'Observability', 'Logging', 'Validation', 'Maintainability'],
  },
]

// ---------------------------------------------------------------------------
// Selected technical problems
// ---------------------------------------------------------------------------

export interface TechnicalProblem {
  title: string
  description: string
}

export const technicalProblems: TechnicalProblem[] = [
  {
    title: 'Bridging C++ Systems into iOS Applications',
    description:
      'Designed and maintained APIs that let performance-critical C++ logic power user-facing Swift and Objective-C iOS applications.',
  },
  {
    title: 'Rendering & Managing Large Geospatial Datasets',
    description:
      'Worked on rendering and managing large-scale mapping, charting, and routing data for real-time aviation visualization.',
  },
  {
    title: 'Modernizing Legacy Systems with Rust',
    description:
      'Introduced Rust into a C++-based codebase to improve memory safety and maintainability without disrupting existing consumers.',
  },
  {
    title: 'Debugging Expired & Stale Data Issues',
    description:
      'Tracked down and resolved issues caused by stale or expired cached data in long-running aviation applications.',
  },
  {
    title: 'Improving Logging & Observability',
    description:
      'Reworked logging output to make complex, hard-to-trace system behavior easier to follow during debugging.',
  },
  {
    title: 'Building Offline-First Mobile App Architecture',
    description:
      'Designed mobile app data layers that work reliably offline and stay consistent once connectivity returns.',
  },
]

// ---------------------------------------------------------------------------
// Personal projects (private / in-progress apps)
// ---------------------------------------------------------------------------

export type ProjectStatus = 'In Development' | 'Private Beta' | 'Coming Soon' | 'App Store Planned' | 'Concept'

export interface PersonalProject {
  slug: string
  name: string
  description: string
  statuses: ProjectStatus[]
  tech: string[]
}

export const personalProjects: PersonalProject[] = [
  {
    slug: 'workout-progression-app',
    name: 'Workout Progression App',
    description:
      'A mobile workout planning app focused on simple strength progression, offline-first data storage, and prediction of upcoming workouts.',
    statuses: ['In Development', 'App Store Planned'],
    tech: ['React Native', 'Expo', 'TypeScript', 'Local database storage'],
  },
  {
    slug: 'household-planning-app',
    name: 'Household Planning App',
    description:
      'A family organization app concept for shared chores, reminders, calendar-style planning, and household task management.',
    statuses: ['Concept', 'In Development'],
    tech: ['React Native', 'TypeScript', 'Future account support'],
  },
]

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['C++', 'Swift', 'Objective-C', 'Rust', 'C#', 'JavaScript', 'TypeScript', 'Python'] },
  { category: 'Mobile', items: ['iOS', 'SwiftUI', 'UIKit', 'React Native', 'Expo'] },
  {
    category: 'Systems & Backend',
    items: ['APIs', 'Data processing', 'Caching', 'XML parsing', 'Logging', 'Debugging', 'Legacy modernization'],
  },
  { category: 'Tools', items: ['Git', 'GitHub', 'Azure DevOps', 'Jira', 'CMake', 'Xcode'] },
  {
    category: 'Domains',
    items: ['Aviation software', 'Electronic Flight Bags', 'Geospatial systems', 'Mapping & charting', 'Weather data', 'Mobile applications'],
  },
]
