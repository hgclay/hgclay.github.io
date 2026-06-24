import { about, experience, hero, personalProjects, resumePath, skillGroups, technicalProblems } from '../data/portfolioData'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ExperienceCard from '../components/ExperienceCard'
import TechnicalProblemCard from '../components/TechnicalProblemCard'
import ProjectCard from '../components/ProjectCard'
import SkillBadge from '../components/SkillBadge'
import ContactLinks from '../components/ContactLinks'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function Home() {
  useDocumentMeta(
    `${hero.name} — ${hero.title}`,
    hero.tagline,
  )

  return (
    <>
      <Hero />

      <Section id="about" index="01" kicker="About" title={about.heading}>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-ink-200">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        index="02"
        kicker="Experience"
        title="Professional Experience"
        description="High-level summaries of work on Boeing / Jeppesen aviation software. Details are kept at a level that respects proprietary and confidentiality boundaries."
        className="bg-ink-900/30"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {experience.map((project) => (
            <ExperienceCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section
        index="03"
        kicker="Problems"
        title="Selected Technical Problems"
        description="A few recurring problems across this work, independent of any single project."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technicalProblems.map((problem) => (
            <TechnicalProblemCard key={problem.title} problem={problem} />
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        index="04"
        kicker="What I'm Building Now"
        title="Personal Projects"
        description="Apps I'm building outside of work."
        className="bg-ink-900/30"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {personalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" index="05" kicker="Skills" title="Skills">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="coord-label">{group.category}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        index="06"
        kicker="Resume"
        title="Want the short version?"
        description="A condensed, recruiter-friendly summary of the same experience."
        className="bg-ink-900/30"
      >
        <a
          href={resumePath}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-route-500 px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-route-400"
        >
          Download Resume (PDF)
        </a>
      </Section>

      <Section id="contact" index="07" kicker="Contact" title="Let's talk">
        <ContactLinks />
      </Section>
    </>
  )
}
