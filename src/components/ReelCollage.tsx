import { reels } from "../data/content";
import PreviewVideo from "./PreviewVideo";

// Gradient backgrounds for each card when no video/thumbnail is available
const BRAND_GRADIENTS: Record<string, string> = {
  "Bitwise Branding": "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1e1e1e 100%)",
  "The Franchise Insider": "linear-gradient(135deg, #0a0f2e 0%, #1a237e 50%, #0d1333 100%)",
};

const BRAND_INITIALS: Record<string, string> = {
  "Bitwise Branding": "BB",
  "The Franchise Insider": "TFI",
};

// Layout config for asymmetric collage — 6 cards
// top values are percentage offsets within the padded container (starts below nav)
const CARD_CONFIGS = [
  // Column 1 — tall card
  { col: 1, colStart: "left-[0%]", width: "w-[28%]", height: "aspect-[9/16]", float: "float-a", delay: "0ms", zIndex: 1, top: "top-[5%]" },
  // Column 1 — small card below
  { col: 1, colStart: "left-[2%]", width: "w-[22%]", height: "aspect-square", float: "float-c", delay: "200ms", zIndex: 2, top: "top-[60%]" },
  // Column 2 — medium card, offset up
  { col: 2, colStart: "left-[24%]", width: "w-[26%]", height: "aspect-[4/5]", float: "float-b", delay: "100ms", zIndex: 1, top: "top-[0%]" },
  // Column 2 — taller card
  { col: 2, colStart: "left-[26%]", width: "w-[24%]", height: "aspect-[9/16]", float: "float-a", delay: "350ms", zIndex: 2, top: "top-[55%]" },
  // Column 3 — medium
  { col: 3, colStart: "left-[52%]", width: "w-[26%]", height: "aspect-[4/5]", float: "float-c", delay: "150ms", zIndex: 1, top: "top-[8%]" },
  // Column 3 — small square
  { col: 3, colStart: "left-[56%]", width: "w-[22%]", height: "aspect-square", float: "float-b", delay: "280ms", zIndex: 2, top: "top-[62%]" },
];

export default function ReelCollage() {
  return (
    <div
      className="hero-collage relative w-full h-full"
      aria-label="Instagram Reel preview collage"
    >
      {reels.map((reel, i) => {
        const config = CARD_CONFIGS[i];
        const hasVideo = Boolean(reel.videoSrc);
        const gradient = BRAND_GRADIENTS[reel.brand] ?? "linear-gradient(135deg, #1a1a1a, #2d2d2d)";
        const initials = BRAND_INITIALS[reel.brand] ?? reel.brand[0];
        const accentColor = reel.accent;

        return (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${reel.label} by ${reel.brand} on Instagram`}
            className={`reel-card absolute ${config.colStart} ${config.top} ${config.width} ${config.height} ${config.float}`}
            style={{
              animationDelay: config.delay,
              zIndex: config.zIndex,
            }}
          >
            {/* Video or styled background */}
            {hasVideo ? (
              <>
                <div className="absolute inset-0" style={{ background: gradient }} aria-hidden="true" />
                <PreviewVideo
                src={reel.videoSrc!}
                className="absolute inset-0 w-full h-full object-cover"
              />
              </>
            ) : (
              <div
                className="absolute inset-0"
                style={{ background: gradient }}
                aria-hidden="true"
              >
                {/* Geometric decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute top-1/4 left-1/4 w-16 h-16 border rounded-sm rotate-45"
                    style={{ borderColor: accentColor }}
                  />
                  <div
                    className="absolute bottom-1/3 right-1/4 w-8 h-8 border rounded-full"
                    style={{ borderColor: accentColor }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 opacity-20"
                    style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
                  />
                </div>

                {/* Brand initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display font-light select-none opacity-20"
                    style={{
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      color: accentColor,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {initials}
                  </span>
                </div>

                {/* Instagram icon */}
                <div className="absolute top-3 right-3 opacity-30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                  </svg>
                </div>
              </div>
            )}

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
