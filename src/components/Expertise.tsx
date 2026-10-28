import { expertise } from "../data/content";
import { useStaggerReveal } from "../hooks/useStaggerReveal";
import { useReveal } from "../hooks/useReveal";

const ACCENTS = ["#D7FF64", "#435BFF", "#DCD6FF", "#FF8068", "#D7FF64", "#435BFF"];

export default function Expertise() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();
  const { ref: gridRef, visible: gridVisible } = useStaggerReveal<HTMLDivElement>(0.06);

  const DELAYS = [0, 80, 160, 240, 320, 400];

  return (
    <section
      id="expertise"
      className="section-light py-24 md:py-36 section-line-light overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div
          ref={headRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className={`anim-fade-up ${headVisible ? "is-visible" : ""}`}>
            <p className="section-label section-label-dark mb-5 tracking-[0.2em]">
              Expertise
            </p>
            <h2 className="font-display font-light text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.0] text-charcoal">
              What I do<br />
              <span className="italic">best.</span>
            </h2>
          </div>
          <p
            className={`text-charcoal/50 text-sm max-w-[36ch] leading-relaxed anim-fade-up ${headVisible ? "is-visible" : ""}`}
            style={{ animationDelay: "120ms" }}
          >
            Six areas where strategy and creative production meet.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-0 border border-charcoal/8 divide-x divide-y divide-charcoal/8"
        >
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className={`expertise-card group bg-transparent p-8 md:p-10 hover:bg-charcoal/4 anim-fade-up ${gridVisible ? "is-visible" : ""}`}
              style={{ animationDelay: `${DELAYS[i]}ms` }}
            >
              {/* Number */}
              <span
                className="block font-display text-4xl font-light leading-none select-none mb-6 opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                style={{ color: ACCENTS[i] === "#DCD6FF" ? "#7B6FFF" : ACCENTS[i] }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Accent line */}
              <div
                className="w-0 h-0.5 mb-5 group-hover:w-8 transition-all duration-400"
                style={{ background: ACCENTS[i] }}
                aria-hidden="true"
              />

              <h3 className="font-display text-xl text-charcoal font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-charcoal/55 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-t border-charcoal/8 pt-8">
          <div className="marquee-track anim-marquee" aria-hidden="true">
            {[...Array(2)].map((_, ri) => (
              <span key={ri} className="flex items-center gap-8 pr-8">
                {[
                  "Content Strategy",
                  "·",
                  "Brand Management",
                  "·",
                  "Social Media",
                  "·",
                  "Market Research",
                  "·",
                  "Creative Production",
                  "·",
                  "PR & Communications",
                  "·",
                ].map((w, wi) => (
                  <span
                    key={`${ri}-${wi}`}
                    className={`font-display font-light text-2xl md:text-3xl whitespace-nowrap ${
                      w === "·" ? "" : "text-charcoal/15"
                    }`}
                    style={w === "·" ? { color: ACCENTS[wi % ACCENTS.length] } : {}}
                  >
                    {w}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
