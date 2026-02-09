import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const REVEAL_DURATION_MS = 380;
const REVEAL_EASING = "ease-out";

export interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms (e.g. 60, 120 for list items) */
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wrapper that reveals children on scroll: opacity 0→1, translateY(12px)→0.
 * Runs once when element enters viewport. Respects prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className, as: Component = "div" }: RevealProps) {
  const { ref, revealed } = useScrollReveal({ delay });

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("motion-reveal", className)}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(12px)",
        transition: `opacity ${REVEAL_DURATION_MS}ms ${REVEAL_EASING}, transform ${REVEAL_DURATION_MS}ms ${REVEAL_EASING}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
