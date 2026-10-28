import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Scroll-reveal hook backed by IntersectionObserver.
 * Returns {ref, visible} — add class "is-visible" when visible=true.
 */
export function useReveal<T extends HTMLElement>(opts: RevealOptions = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px" } = opts;
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
