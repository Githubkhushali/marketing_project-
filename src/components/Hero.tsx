import { hero, profile } from "../data/content";
import ReelCollage from "./ReelCollage";
import PreviewVideo from "./PreviewVideo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen bg-charcoal overflow-hidden flex flex-col"
      aria-label="Hero — Making Brands Impossible to Scroll Past"
    >
      {/* Grid overlay — subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(248,247,243,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248,247,243,1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Lime accent blob — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #D7FF64 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Cobalt blob — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, #435BFF 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main content grid */}
      <div className="relative z-10 flex-1 flex flex-col">

        {/* Top section — full width */}
        <div className="mx-auto max-w-7xl w-full px-6 md:px-10 pt-28 md:pt-32 pb-0 flex-1 grid lg:grid-cols-2 gap-0">

          {/* LEFT — headline and CTAs */}
          <div className="flex flex-col justify-center pb-16 lg:pb-24 lg:pr-16">

            {/* Eyebrow */}
            <p className="hero-eyebrow section-label text-offwhite/40 mb-8 tracking-[0.2em]">
              {hero.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="font-display font-light leading-[0.95] text-offwhite mb-8">
              <span className="hero-line-1 block overflow-hidden">
                <span className="block text-[clamp(1.85rem,9vw,7rem)] md:text-[clamp(3rem,7.5vw,7rem)] tracking-tight">
                  {hero.headline[0]}
                </span>
              </span>
              <span className="hero-line-2 block overflow-hidden">
                <span className="block text-[clamp(1.85rem,9vw,7rem)] md:text-[clamp(3rem,7.5vw,7rem)] tracking-tight italic">
                  {hero.headline[1]}
                </span>
              </span>
              <span className="hero-line-3 block overflow-hidden">
                <span className="block text-[clamp(1.85rem,9vw,7rem)] md:text-[clamp(3rem,7.5vw,7rem)] tracking-tight">
                  <span className="text-lime">{hero.headline[2]}</span>
                </span>
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-sub text-offwhite/50 max-w-[46ch] text-base md:text-lg leading-relaxed mb-10">
              {hero.sub}
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap gap-4 items-center">
              <a href="#work" className="btn-primary" aria-label="Explore Vaidehi's work">
                <span>Explore My Work</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn-outline" aria-label="Get in touch with Vaidehi">
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Location strip */}
            <div className="hero-cta mt-12 flex items-center gap-4">
              <div className="w-8 h-px bg-lime/40" aria-hidden="true" />
              <p className="text-xs text-offwhite/30 tracking-[0.2em] uppercase font-medium">
                {profile.location}
              </p>
            </div>
          </div>

          {/* RIGHT — Reel Collage (desktop) */}
          <div className="hidden lg:block relative pb-24">
            <div className="relative h-full min-h-[540px]">
              <ReelCollage />
            </div>
          </div>
        </div>

        {/* Mobile reel collage strip — horizontal scroll */}
        <div className="lg:hidden px-6 pb-16 overflow-x-auto hide-scrollbar">
          <div
            className="flex gap-3 pb-4"
            style={{ width: "max-content" }}
          >
            {/* Import reels inline for mobile */}
            <MobileReelStrip />
          </div>
          <p className="text-xs text-offwhite/30 tracking-widest uppercase mt-2">
            Scroll to explore →
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mx-6 md:mx-10">
          <div className="mx-auto max-w-7xl">
            <div className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-offwhite/20 tracking-[0.2em] uppercase">
                  MBA · Digital Marketing
                </span>
                <span className="text-[10px] text-offwhite/20" aria-hidden="true">·</span>
                <span className="text-[10px] text-offwhite/20 tracking-[0.2em] uppercase">
                  Ahmedabad University
                </span>
              </div>
              {/* Scroll indicator */}
              <div
                className="hidden md:flex items-center gap-3"
                aria-hidden="true"
              >
                <div className="w-px h-8 bg-white/10 relative overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 h-full bg-lime/60"
                    style={{ animation: "clipRevealUp 1.8s ease-in-out infinite" }}
                  />
                </div>
                <span className="text-[9px] text-offwhite/20 tracking-[0.25em] uppercase">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Mobile reel strip ─────────────────────────────────────────
import { reels } from "../data/content";

const BRAND_GRADIENTS: Record<string, string> = {
  "Bitwise Branding": "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
  "The Franchise Insider": "linear-gradient(135deg, #0a0f2e 0%, #1a237e 100%)",
};

function MobileReelStrip() {
  return (
    <>
      {reels.map((reel) => (
        <a
          key={reel.id}
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${reel.label} by ${reel.brand} on Instagram`}
          className="reel-card relative shrink-0 w-32 h-52 block"
        >
          {reel.videoSrc ? (
            <>
              <div className="absolute inset-0" style={{ background: BRAND_GRADIENTS[reel.brand] ?? "#1a1a1a" }} aria-hidden="true" />
              <PreviewVideo
              src={reel.videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
            />
            </>
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: BRAND_GRADIENTS[reel.brand] ?? "#1a1a1a" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display font-light text-xl opacity-20"
                  style={{ color: reel.accent }}
                >
                  {reel.brand[0]}
                </span>
              </div>
            </div>
          )}
          <div className="reel-card-overlay" />
          <div className="reel-card-content">
            <div className="w-4 h-0.5 mb-1" style={{ background: reel.accent }} />
            <p className="text-[9px] text-white/50 uppercase tracking-widest leading-none mb-0.5">
              {reel.label}
            </p>
            <p className="text-[10px] text-white font-medium leading-tight">{reel.brand}</p>
          </div>
        </a>
      ))}
    </>
  );
}
