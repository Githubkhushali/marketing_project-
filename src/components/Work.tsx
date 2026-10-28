import { reels, work } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import PreviewVideo from "./PreviewVideo";

// ─── Reel Card ─────────────────────────────────────────────────
const BRAND_GRADIENTS: Record<string, string> = {
  "Bitwise Branding": "linear-gradient(135deg, #111 0%, #222 60%, #1a1a1a 100%)",
  "The Franchise Insider": "linear-gradient(135deg, #0a0f2e 0%, #1a237e 60%, #0d1333 100%)",
};

function ReelCard({ reel, index }: { reel: (typeof reels)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>({ threshold: 0.1 });
  return (
    <a
      ref={ref}
      key={reel.id}
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${reel.label} by ${reel.brand} on Instagram`}
      className={`reel-card block relative aspect-[9/16] anim-fade-up ${visible ? "is-visible" : ""}`}
      style={{ animationDelay: `${index * 80}ms` }}
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
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: BRAND_GRADIENTS[reel.brand] ?? "#1a1a1a" }}
        >
          {/* Decorative */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-20 h-20 border rotate-12" style={{ borderColor: reel.accent }} />
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border rounded-full" style={{ borderColor: reel.accent }} />
          </div>
          {/* Instagram icon */}
          <div className="flex flex-col items-center gap-3">
            <svg
              className="opacity-30"
              width="32" height="32" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="1"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
            </svg>
            <p className="text-[9px] text-white/30 uppercase tracking-widest">View on Instagram</p>
          </div>
        </div>
      )}

      <div className="reel-card-overlay" />

      {/* Play button */}
      <div className="reel-play-btn" aria-hidden="true">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path d="M1 1l10 6-10 6V1z" fill="#171717"/>
        </svg>
      </div>

      <div className="reel-card-content">
        <div className="w-6 h-0.5 mb-2" style={{ background: reel.accent }} />
        <p className="text-[9px] text-white/50 uppercase tracking-widest leading-none mb-0.5">
          {reel.label}
        </p>
        <p className="text-xs text-white font-medium">{reel.brand}</p>
      </div>
    </a>
  );
}

// ─── Design Work Card ─────────────────────────────────────────
function WorkCard({ item, index }: { item: (typeof work)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.08 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`work-card grid md:grid-cols-12 gap-8 md:gap-16 items-center py-12 md:py-20 border-t ${
        isEven ? "" : "border-offwhite/10"
      }`}
      style={{ borderColor: "rgba(248,247,243,0.07)" }}
    >
      {/* Image */}
      <div className={`md:col-span-6 ${isEven ? "md:order-1" : "md:order-2"}`}>
        <div
          className={`work-card-img bg-charcoal/40 anim-clip-up ${visible ? "is-visible" : ""}`}
          style={{
            animationDelay: "80ms",
            aspectRatio: item.layout === "hero" ? "4/3" : item.layout === "cinematic" ? "16/9" : "4/5",
          }}
        >
          {item.layout === "hero" ? (
            <div className="grid grid-cols-2 gap-1 h-full">
              {item.images.slice(0, 4).map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${item.title} — image ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              ))}
            </div>
          ) : (
            <img
              src={item.images[0]}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          )}
        </div>
      </div>

      {/* Text */}
      <div className={`md:col-span-6 ${isEven ? "md:order-2" : "md:order-1"}`}>
        {/* Number */}
        <span
          className={`block font-display text-6xl font-light text-offwhite/5 leading-none select-none mb-4 anim-fade-up ${visible ? "is-visible" : ""}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Category */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-0.5" style={{ background: item.accent }} aria-hidden="true" />
          <p
            className={`text-[10px] font-medium uppercase tracking-[0.18em] anim-fade-up ${visible ? "is-visible" : ""}`}
            style={{ color: item.accent, animationDelay: "80ms" }}
          >
            {item.category}
          </p>
        </div>

        {/* Title */}
        <h3
          className={`font-display font-light text-[clamp(1.6rem,3.5vw,2.5rem)] text-offwhite leading-[1.1] mb-3 draw-underline anim-fade-up ${visible ? "is-visible" : ""}`}
          style={{ animationDelay: "140ms" }}
        >
          {item.title}
        </h3>

        <p
          className={`text-offwhite/40 text-sm font-medium mb-5 anim-fade-up ${visible ? "is-visible" : ""}`}
          style={{ animationDelay: "180ms" }}
        >
          {item.subtitle}
        </p>

        <p
          className={`text-offwhite/55 leading-relaxed text-sm max-w-[42ch] anim-fade-up ${visible ? "is-visible" : ""}`}
          style={{ animationDelay: "220ms" }}
        >
          {item.description}
        </p>

        <div
          className={`work-arrow mt-6 text-sm font-semibold uppercase tracking-widest anim-fade-up ${visible ? "is-visible" : ""}`}
          style={{ color: item.accent, animationDelay: "280ms" }}
        >
          <span>View project</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Work Section ────────────────────────────────────────
export default function Work() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();
  const { ref: reelHeadRef, visible: reelHeadVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="section-dark py-24 md:py-36 section-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div
          ref={headRef}
          className={`mb-16 anim-fade-up ${headVisible ? "is-visible" : ""}`}
        >
          <p className="section-label text-offwhite/40 mb-5 tracking-[0.2em]">
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-light text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.0] text-offwhite">
              Brand & content<br />
              <span className="italic text-lime">work.</span>
            </h2>
            <p className="text-offwhite/40 text-sm max-w-[36ch] leading-relaxed">
              A mix of content systems, campaign creative, Reels, and social identity work.
            </p>
          </div>
        </div>

        {/* ── A. Social Media & Reels ── */}
        <div
          ref={reelHeadRef}
          className={`mb-8 anim-fade-up ${reelHeadVisible ? "is-visible" : ""}`}
        >
          <div className="flex items-center gap-4">
            <div className="w-6 h-0.5 bg-lime" aria-hidden="true" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
              Social Media & Reels
            </p>
          </div>
        </div>

        {/* Reels grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-24">
          {reels.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>

        {/* Reels explanation */}
        <p className="text-offwhite/25 text-xs mb-4 ml-1">
          ↑ Click any card to view the full Reel on Instagram
        </p>

        {/* ── B. Creative Design ── */}
        <div className="mt-20 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-0.5 bg-lavender" aria-hidden="true" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lavender">
              Creative Design
            </p>
          </div>
        </div>

        {/* Design work cards */}
        <div>
          {work.map((item, i) => (
            <WorkCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
