import { experience } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function ExperienceItem({
  role,
  index,
}: {
  role: (typeof experience)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`exp-card group anim-fade-up ${visible ? "is-visible" : ""}`}
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-12">

        {/* Left — number + period */}
        <div className="md:col-span-3">
          <span
            className="block font-display text-5xl font-light leading-none select-none mb-4 transition-all duration-500"
            style={{ color: role.accent, opacity: 0.15 }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div
            className="w-6 h-0.5 mb-3 group-hover:w-12 transition-all duration-400"
            style={{ background: role.accent }}
            aria-hidden="true"
          />
          <p className="text-[10px] text-offwhite/40 uppercase tracking-[0.18em] font-medium">
            {role.period}
          </p>
        </div>

        {/* Right — content */}
        <div className="md:col-span-9">
          <h3 className="font-display font-light text-[clamp(1.5rem,3.5vw,2.25rem)] text-offwhite leading-[1.15] mb-2">
            {role.company}
          </h3>
          <p
            className="text-sm font-semibold uppercase tracking-[0.1em] mb-6"
            style={{ color: role.accent }}
          >
            {role.role}
          </p>

          <p
            className={`text-offwhite/55 leading-relaxed max-w-measure mb-6 text-base anim-fade-up ${visible ? "is-visible" : ""}`}
            style={{ animationDelay: "120ms" }}
          >
            {role.summary}
          </p>

          <ul className="space-y-3">
            {role.bullets.map((b, bi) => (
              <li
                key={bi}
                className={`flex gap-4 text-offwhite/40 leading-relaxed text-sm anim-fade-up ${visible ? "is-visible" : ""}`}
                style={{ animationDelay: `${200 + bi * 60}ms` }}
              >
                <span
                  className="mt-1 shrink-0 w-1 h-1 rounded-full block"
                  style={{ background: role.accent, minWidth: "4px", marginTop: "8px" }}
                  aria-hidden="true"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="experience"
      className="section-dark py-24 md:py-36 section-line overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div
          ref={headRef}
          className={`mb-4 anim-fade-up ${headVisible ? "is-visible" : ""}`}
        >
          <p className="section-label text-offwhite/40 mb-5 tracking-[0.2em]">
            Experience
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-light text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.0] text-offwhite">
              Where I&apos;ve<br />
              <span className="italic text-coral">worked.</span>
            </h2>
          </div>
        </div>

        {/* Items */}
        <div className="mt-12">
          {experience.map((role, i) => (
            <ExperienceItem key={role.company} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
