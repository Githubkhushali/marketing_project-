import { useEffect, useRef } from "react";

interface LightboxProps {
  images: { src: string; alt: string; title?: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const current = images[currentIndex];

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
        if (event.key === "ArrowLeft") onPrev();
        if (event.key === "ArrowRight") onNext();
        if (event.key === "Tab") {
          const buttons = dialogRef.current?.querySelectorAll<HTMLElement>("button");
          if (!buttons?.length) return;
          const first = buttons[0];
          const last = buttons[buttons.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }}
      ref={dialogRef}
    >
      {/* Close */}
      <button
        className="lightbox-btn"
        type="button"
        style={{ top: "1rem", right: "1rem" }}
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3l12 12M15 3L3 15"/>
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="lightbox-btn"
          type="button"
          style={{ top: "50%", left: "1rem", transform: "translateY(-50%)" }}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 3L5 9l6 6"/>
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="lightbox-img"
        />
        {current.title && (
          <div className="mt-4 text-center">
            <p className="text-offwhite/60 text-sm tracking-wide">{current.title}</p>
            <p className="text-offwhite/30 text-xs mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="lightbox-btn"
          type="button"
          style={{ top: "50%", right: "1rem", transform: "translateY(-50%)" }}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 3l6 6-6 6"/>
          </svg>
        </button>
      )}
    </div>
  );
}
