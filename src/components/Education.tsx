import { education, certifications } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

export default function Education() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();
  const { ref: eduRef, visible: eduVisible } = useStaggerReveal<HTMLUListElement>(0.06);
  const { ref: certRef, visible: certVisible } = useStaggerReveal<HTMLUListElement>(0.06);

  return (
    <section
      id="education"
      className="section-dark py-24 md:py-36 section-line overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div
          ref={headRef}
          className={`mb-16 anim-fade-up ${headVisible ? "is-visible" : ""}`}
        >
          <p className="section-label text-offwhite/40 mb-5 tracking-[0.2em]">
            Background
          </p>
          <h2 className="font-display font-light text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.0] text-offwhite">
            Education &<br />
            <span className="italic text-lavender">credentials.</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Education */}
          <div>
            <h3
              className={`text-[10px] text-offwhite/30 uppercase tracking-[0.2em] font-medium mb-10 anim-fade-up ${headVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "80ms" }}
            >
              Education
            </h3>
            <ul ref={eduRef} className="space-y-10">
              {education.map((e, i) => (
                <li
                  key={e.degree}
                  className={`anim-fade-up ${eduVisible ? "is-visible" : ""}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`h-px flex-1 bg-white/10 anim-line-grow ${eduVisible ? "is-visible" : ""}`}
                      style={{ animationDelay: `${i * 120 + 60}ms` }}
                    />
                    <p
                      className="text-[10px] uppercase tracking-widest shrink-0 font-medium"
                      style={{ color: "#D7FF64" }}
                    >
                      {e.year}
                    </p>
                  </div>
                  <h4 className="font-display text-xl text-offwhite mb-1">{e.degree}</h4>
                  <p className="text-offwhite/40 text-sm leading-relaxed">{e.institute}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className={`text-[10px] text-offwhite/30 uppercase tracking-[0.2em] font-medium mb-10 anim-fade-up ${headVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "100ms" }}
            >
              Certifications & Training
            </h3>
            <ul ref={certRef} className="space-y-10">
              {certifications.map((c, i) => (
                <li
                  key={c.title}
                  className={`anim-fade-up ${certVisible ? "is-visible" : ""}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`h-px flex-1 bg-white/10 anim-line-grow ${certVisible ? "is-visible" : ""}`}
                      style={{ animationDelay: `${i * 120 + 60}ms` }}
                    />
                    <p
                      className="text-[10px] uppercase tracking-widest shrink-0 font-medium text-right max-w-[20ch]"
                      style={{ color: "#DCD6FF" }}
                    >
                      {c.period}
                    </p>
                  </div>
                  <h4 className="font-display text-xl text-offwhite mb-1">{c.title}</h4>
                  {c.detail && <p className="text-offwhite/40 text-sm leading-relaxed">{c.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
