import { about } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

export default function About() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();
  const { ref: imgRef, visible: imgVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: textRef, visible: textVisible } = useStaggerReveal<HTMLDivElement>(0.08);

  return (
    <section
      id="about"
      className="section-light py-24 md:py-36 section-line-light overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Section label */}
        <div ref={headRef} className={`mb-16 anim-fade-up ${headVisible ? "is-visible" : ""}`}>
          <p className="section-label section-label-dark mb-5 tracking-[0.2em]">About</p>
          <h2
            className="font-display font-light text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.0] text-charcoal max-w-[20ch]"
          >
            {about.heading.split(". ").map((part, i) => (
              <span key={i} className={`block ${i === 1 ? "italic" : ""}`}>
                {part}{i === 0 ? "." : ""}
              </span>
            ))}
          </h2>
        </div>

        {/* Two column */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* Left — Portrait */}
          <div className="md:col-span-5 md:sticky md:top-24">
            <div
              ref={imgRef}
              className={`relative anim-clip-up ${imgVisible ? "is-visible" : ""}`}
            >
              {/* Accent corner */}
              <div
                className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-lime z-10"
                style={{ opacity: imgVisible ? 1 : 0, transition: "opacity 0.5s ease 0.6s" }}
                aria-hidden="true"
              />

              <div className="img-hover-depth aspect-[3/4] bg-charcoal/5">
                <img
                  src="/assets/photos/vaidehi-hero.jpg"
                  alt="Vaidehi Teraiya — digital marketing strategist"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              </div>

              {/* Label */}
              <div className="mt-4 flex items-center gap-4">
                <div
                  className={`h-px bg-charcoal/20 flex-1 anim-line-grow ${imgVisible ? "is-visible" : ""}`}
                  style={{ animationDelay: "500ms" }}
                />
                <span className="text-[10px] text-charcoal/40 uppercase tracking-[0.2em] font-medium">
                  Gujarat, India
                </span>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div ref={textRef} className="md:col-span-7 md:col-start-6 pt-0 md:pt-8">
            <div className="space-y-7">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-charcoal/70 text-lg leading-relaxed anim-fade-up ${textVisible ? "is-visible" : ""}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Quality chips */}
            <div
              className={`mt-12 grid grid-cols-3 gap-0 anim-fade-up ${textVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "400ms" }}
            >
              {[
                { label: "Strategic", sub: "Research-led", accent: "#D7FF64" },
                { label: "Creative", sub: "Story-driven", accent: "#435BFF" },
                { label: "Versatile", sub: "B2C & B2B", accent: "#FF8068" },
              ].map((q) => (
                <div
                  key={q.label}
                  className="border-t-2 pt-5 pr-4 group"
                  style={{ borderColor: q.accent }}
                >
                  <p className="font-display text-xl text-charcoal font-medium mb-1">{q.label}</p>
                  <p className="text-xs text-charcoal/40 uppercase tracking-widest">{q.sub}</p>
                </div>
              ))}
            </div>

            {/* Photo link */}
            <div
              className={`mt-10 anim-fade-up ${textVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "520ms" }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-3 text-sm font-semibold text-charcoal uppercase tracking-widest group"
              >
                <span className="draw-underline">See my work</span>
                <svg
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
