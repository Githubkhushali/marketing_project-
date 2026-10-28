import { toolkit } from "../data/content";
import { useStaggerReveal } from "../hooks/useStaggerReveal";
import { useReveal } from "../hooks/useReveal";

export default function Toolkit() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();
  const { ref: toolRef, visible: toolVisible } = useStaggerReveal<HTMLUListElement>(0.06);
  const { ref: skillRef, visible: skillVisible } = useStaggerReveal<HTMLUListElement>(0.06);

  return (
    <section
      className="section-light py-24 md:py-36 section-line-light overflow-hidden"
      id="skills"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div
          ref={headRef}
          className={`mb-16 anim-fade-up ${headVisible ? "is-visible" : ""}`}
        >
          <p className="section-label section-label-dark mb-5 tracking-[0.2em]">
            Skills & Tools
          </p>
          <h2 className="font-display font-light text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.0] text-charcoal">
            The full<br />
            <span className="italic">toolkit.</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Tools */}
          <div>
            <h3
              className={`font-display font-light text-lg text-charcoal/30 mb-8 anim-fade-up ${headVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "120ms" }}
            >
              Tools I use
            </h3>
            <ul ref={toolRef} className="flex flex-wrap gap-2">
              {toolkit.tools.map((tool, i) => (
                <li
                  key={tool}
                  className={`tool-tag anim-scale-in ${toolVisible ? "is-visible" : ""}`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3
              className={`font-display font-light text-lg text-charcoal/30 mb-8 anim-fade-up ${headVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "160ms" }}
            >
              Areas of expertise
            </h3>
            <ul ref={skillRef} className="flex flex-wrap gap-2">
              {toolkit.skills.map((skill, i) => (
                <li
                  key={skill}
                  className={`skill-tag anim-scale-in ${skillVisible ? "is-visible" : ""}`}
                  style={{ animationDelay: `${i * 50}ms`, borderColor: "rgba(23,23,23,0.12)", color: "#4B4640" }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
