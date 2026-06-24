"use client";
import { useState, useEffect, useRef } from "react";

export function useScoreCounter(target: number): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const start = Date.now();
    const duration = 1000;

    function tick() {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    // safety: guarantee final value
    timeoutRef.current = setTimeout(() => {
      setCount(target);
    }, 1400);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [target]);

  return count;
}
