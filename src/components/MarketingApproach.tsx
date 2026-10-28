import { marketingApproach } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function MarketingApproach() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="approach"
      className="section-dark py-24 md:py-36 section-line overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div
          ref={headRef}
          className={`mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 anim-fade-up ${headVisible ? "is-visible" : ""}`}
        >
          <div>
            <p className="section-label text-offwhite/40 mb-5 tracking-[0.2em]">
              My Approach
            </p>
            <h2 className="font-display font-light text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.0] text-offwhite">
              How I make it<br />
              <span className="italic text-lime">happen.</span>
            </h2>
          </div>
          <p
            className="text-offwhite/40 text-sm max-w-[32ch] leading-relaxed"
            style={{ animationDelay: "120ms" }}
          >
            A general marketing approach — not a rigid playbook, but a thoughtful way of working.
          </p>
        </div>

        {/* Steps — horizontal desktop, vertical mobile */}
        <div className="grid md:grid-cols-4 gap-0 md:divide-x divide-white/5">
          {marketingApproach.map((step, i) => {
            const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.1 });
            return (
              <div
                key={step.step}
                ref={ref}
                className={`approach-step group anim-fade-up ${visible ? "is-visible" : ""}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-display text-4xl font-light leading-none opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                    style={{ color: step.accent }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Accent line */}
                <div
                  className="w-8 h-0.5 mb-5 transition-all duration-500 group-hover:w-16"
                  style={{ background: step.accent }}
                  aria-hidden="true"
                />

                <h3 className="font-display text-xl text-offwhite font-medium mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-offwhite/45 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Connector line (desktop only) */}
        <div className="hidden md:block mt-0 relative" aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-lime/20 via-cobalt/20 to-coral/20 mt-0" />
        </div>
      </div>
    </section>
  );
}
