import { useEffect, useRef, useState } from "react";

/**
 * Stagger reveal hook — observes a parent container and returns
 * a boolean `visible` that can be used to add "is-visible" to
 * each child individually with CSS animation-delay utilities.
 */
export function useStaggerReveal<T extends HTMLElement>(
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px"
) {
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

/**
 * Returns an array of booleans — each element becomes visible with a
 * staggered delay after the container first enters the viewport.
 * Used for hero text lines, expertise cards, etc.
 */
export function useItemsReveal(
  count: number,
  staggerMs = 80,
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px"
) {
  const ref = useRef<HTMLElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(count).fill(false)
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          // Fire visibility for each item with a stagger delay
          Array.from({ length: count }).forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * staggerMs);
          });
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [count, staggerMs, threshold, rootMargin]);

  return { ref, visibleItems };
}
