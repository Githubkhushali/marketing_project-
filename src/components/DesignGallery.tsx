import { useState } from "react";
import { galleryImages } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import Lightbox from "./Lightbox";

const ALL_TAGS = ["All", "Social Media", "Campaigns", "Branding", "Wedding"] as const;
type Tag = (typeof ALL_TAGS)[number];

export default function DesignGallery() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();
  const [activeTag, setActiveTag] = useState<Tag>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeTag === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.tags.includes(activeTag));

  const lightboxImages = filtered.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
  }));

  function openLightbox(idx: number) {
    setLightboxIndex(idx);
  }
  function closeLightbox() {
    setLightboxIndex(null);
  }
  function prevImage() {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + filtered.length) % filtered.length));
  }
  function nextImage() {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length));
  }

  return (
    <section
      id="gallery"
      className="section-light py-24 md:py-36 section-line-light overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div
          ref={headRef}
          className={`mb-12 anim-fade-up ${headVisible ? "is-visible" : ""}`}
        >
          <p className="section-label section-label-dark mb-5 tracking-[0.2em]">
            Creative Gallery
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-light text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.0] text-charcoal">
              Design <span className="italic">work.</span>
            </h2>
            <p className="text-charcoal/50 text-sm max-w-[36ch] leading-relaxed">
              Canva designs, campaign creatives, and social media assets from client work.
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div
          className={`flex flex-wrap gap-2 mb-10 anim-fade-up ${headVisible ? "is-visible" : ""}`}
          style={{ animationDelay: "120ms" }}
          role="group"
          aria-label="Filter gallery by category"
        >
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((img, idx) => (
            <GalleryItem
              key={img.id}
              img={img}
              idx={idx}
              onOpen={() => openLightbox(idx)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-charcoal/40 text-sm">No items in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}

function GalleryItem({
  img,
  idx,
  onOpen,
}: {
  img: (typeof galleryImages)[number];
  idx: number;
  onOpen: () => void;
}) {
  const { ref, visible } = useReveal<HTMLButtonElement>({ threshold: 0.05 });

  return (
    <button
      type="button"
      ref={ref}
      className={`gallery-item break-inside-avoid mb-3 bg-charcoal/5 anim-fade-up text-left w-full p-0 border-0 ${visible ? "is-visible" : ""}`}
      style={{ animationDelay: `${(idx % 4) * 80}ms` }}
      onClick={onOpen}
      aria-label={`View full size: ${img.title}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="w-full h-auto block"
        onError={(event) => {
          event.currentTarget.closest("button")?.setAttribute("hidden", "");
        }}
      />
      <div className="gallery-overlay">
        <div>
          <p className="text-offwhite text-sm font-medium leading-tight">{img.title}</p>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {img.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] text-offwhite/50 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-offwhite/30"
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 11L11 1M11 1H5M11 1v6"/>
          </svg>
        </div>
      </div>
    </button>
  );
}
