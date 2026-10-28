import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: ctaRef, visible: ctaVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      className="relative py-24 md:py-40 section-line overflow-hidden"
      style={{ background: "#0e0e0e" }}
    >
      {/* Large background word */}
      <span
        className="bg-text absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap"
        style={{ WebkitTextStroke: "1px rgba(215,255,100,0.04)", opacity: 1 }}
        aria-hidden="true"
      >
        HELLO
      </span>

      {/* Lime blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #D7FF64, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">

        {/* Label */}
        <div
          ref={headRef}
          className={`anim-fade-up ${headVisible ? "is-visible" : ""}`}
        >
          <p className="section-label text-offwhite/30 mb-8 tracking-[0.2em]">
            Contact
          </p>
        </div>

        {/* Headline */}
        <h2
          className={`font-display font-light text-[clamp(2.4rem,7vw,6.5rem)] text-offwhite leading-[0.95] max-w-[14ch] mb-20 anim-fade-up ${headVisible ? "is-visible" : ""}`}
          style={{ animationDelay: "80ms" }}
        >
          Have a brand<br />
          that needs a<br />
          <span className="italic text-lime">story?</span>
        </h2>

        {/* CTA block */}
        <div ref={ctaRef} className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Email */}
          <div className="md:col-span-8">
            <p className={`text-[10px] text-offwhite/30 uppercase tracking-[0.2em] mb-5 anim-fade-up ${ctaVisible ? "is-visible" : ""}`}>
              Let&apos;s create something worth remembering
            </p>
            <a
              href={`mailto:${profile.email}`}
              className={`contact-email-link font-display font-light text-[clamp(1.2rem,3vw,2rem)] text-offwhite/80 hover:text-lime transition-colors duration-300 anim-fade-up ${ctaVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "80ms" }}
              aria-label={`Email Vaidehi at ${profile.email}`}
            >
              {profile.email}
            </a>

            {/* Buttons row */}
            <div
              className={`mt-8 flex flex-wrap gap-4 anim-fade-up ${ctaVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "160ms" }}
            >
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary"
                aria-label="Send an email to Vaidehi"
              >
                <span>Send a Message</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* CV download — no PDF available, shows honest info */}
              <span
                className="btn-dark opacity-40 cursor-not-allowed"
                title="CV download coming soon"
                aria-label="CV download not yet available"
              >
                <span>Download CV</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 2v7M4 7l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Meta */}
          <div className="md:col-span-4 space-y-8">
            <div
              className={`anim-fade-up ${ctaVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "220ms" }}
            >
              <p className="text-[10px] text-offwhite/25 uppercase tracking-[0.2em] mb-2">Phone</p>
              <a
                href={`tel:${profile.phone}`}
                className="text-offwhite/50 text-base hover:text-offwhite transition-colors duration-200"
              >
                {profile.phone}
              </a>
            </div>

            <div
              className={`anim-fade-up ${ctaVisible ? "is-visible" : ""}`}
              style={{ animationDelay: "280ms" }}
            >
              <p className="text-[10px] text-offwhite/25 uppercase tracking-[0.2em] mb-2">Location</p>
              <p className="text-offwhite/50 text-base">{profile.location}</p>
            </div>

            {profile.socials.length > 0 && (
              <div
                className={`anim-fade-up ${ctaVisible ? "is-visible" : ""}`}
                style={{ animationDelay: "340ms" }}
              >
                <p className="text-[10px] text-offwhite/25 uppercase tracking-[0.2em] mb-3">Elsewhere</p>
                <div className="flex flex-col gap-2">
                  {profile.socials.map((s) => (
                    <a
                      key={s.url}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-offwhite/50 text-sm hover:text-lime transition-colors duration-200"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
