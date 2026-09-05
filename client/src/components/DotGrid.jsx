import { useEffect, useRef } from "react";

export default function DotGrid() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;

    const handleMove = (e) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const dotStyle = {
    backgroundImage:
      "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
    backgroundSize: "22px 22px",
  };

  return (
    <>
      {/* Base dots */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 text-neutral-400/15 dark:text-neutral-500/10"
        style={dotStyle}
      />

      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 -z-30 text-emerald-400/60"
        style={{
          ...dotStyle,
          maskImage:
            "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), black, transparent)",
          WebkitMaskImage:
            "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), black, transparent)",
        }}
      />
    </>
  );
}
