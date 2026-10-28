import { reels } from "../data/content";

// Layout config for asymmetric collage — 6 cards
// top values are percentage offsets within the padded container (starts below nav)
const CARD_CONFIGS = [
  // Column 1 — tall card
  { col: 1, colStart: "left-[0%]", width: "clamp(120px, 14vw, 180px)", aspectRatio: "9 / 16", float: "float-a", delay: "0ms", zIndex: 1, top: "top-[5%]" },
  // Column 1 — small card below
  { col: 1, colStart: "left-[2%]", width: "clamp(96px, 11vw, 144px)", aspectRatio: "1 / 1", float: "float-c", delay: "200ms", zIndex: 2, top: "top-[60%]" },
  // Column 2 — medium card, offset up
  { col: 2, colStart: "left-[24%]", width: "clamp(112px, 13vw, 168px)", aspectRatio: "4 / 5", float: "float-b", delay: "100ms", zIndex: 1, top: "top-[0%]" },
  // Column 2 — taller card
  { col: 2, colStart: "left-[26%]", width: "clamp(104px, 12vw, 156px)", aspectRatio: "9 / 16", float: "float-a", delay: "350ms", zIndex: 2, top: "top-[55%]" },
  // Column 3 — medium
  { col: 3, colStart: "left-[52%]", width: "clamp(112px, 13vw, 168px)", aspectRatio: "4 / 5", float: "float-c", delay: "150ms", zIndex: 1, top: "top-[8%]" },
  // Column 3 — small square
  { col: 3, colStart: "left-[56%]", width: "clamp(96px, 11vw, 144px)", aspectRatio: "1 / 1", float: "float-b", delay: "280ms", zIndex: 2, top: "top-[62%]" },
];

export default function ReelCollage() {
  return (
    <div
      className="hero-collage relative w-full h-full"
      aria-label="Instagram Reel preview collage"
    >
      {reels.map((reel, i) => {
        const config = CARD_CONFIGS[i];
        const accentColor = reel.accent;

        return (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${reel.label} by ${reel.brand} on Instagram`}
            className={`reel-card absolute ${config.colStart} ${config.top} ${config.float}`}
            style={{
              animationDelay: config.delay,
              zIndex: config.zIndex,
              width: config.width,
              aspectRatio: config.aspectRatio,
            }}
          >
            <img
              src={reel.coverSrc}
              alt={`Designed cover artwork for ${reel.brand} — ${reel.label}; not Reel footage`}
              loading="eager"
              decoding="async"
              className="reel-cover absolute inset-0 w-full h-full object-cover"
            />

            {/* Always-visible overlay gradient */}
            <div className="reel-card-overlay" />

            {/* Play button on hover */}
            <div className="reel-play-btn" aria-hidden="true">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M1 1l10 6-10 6V1z" fill="#171717"/>
              </svg>
            </div>

            {/* Card label */}
            <div className="reel-card-content">
              {/* Accent line */}
              <div
                className="w-6 h-0.5 mb-2"
                style={{ background: accentColor }}
                aria-hidden="true"
              />
              <p
                className="text-white/60 font-medium uppercase tracking-widest leading-none mb-1"
                style={{ fontSize: "clamp(0.45rem, 0.8vw, 0.6rem)" }}
              >
                {reel.label}
              </p>
              <p
                className="text-white font-medium leading-tight"
                style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.7rem)" }}
              >
                {reel.brand}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
