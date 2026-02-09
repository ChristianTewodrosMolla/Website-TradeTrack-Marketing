import { useEffect, useRef, useState } from "react";

export interface UseScrollRevealOptions {
  /** Delay in ms before starting the reveal animation */
  delay?: number;
  /** Root margin for IntersectionObserver (e.g. "-40px" to trigger slightly before in view) */
  rootMargin?: string;
  /** Threshold 0-1 for how much of element must be visible */
  threshold?: number;
}

const defaultOptions: UseScrollRevealOptions = {
  delay: 0,
  rootMargin: "0px 0px -40px 0px",
  threshold: 0.1,
};

/**
 * Reusable scroll-reveal: opacity 0→1, translateY(12px)→0.
 * Triggers once when element enters viewport. Use for sections, headings, cards.
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const opts = { ...defaultOptions, ...options };
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && !revealed) setRevealed(true);
      },
      { rootMargin: opts.rootMargin, threshold: opts.threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts.rootMargin, opts.threshold, revealed]);

  return { ref, revealed, delay: opts.delay };
}
