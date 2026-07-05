import React, { useEffect, useState, useRef } from "react";

export function GridSnapCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const gridSize = 32;

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const snappedX = Math.round(e.clientX / gridSize) * gridSize;
      const snappedY = Math.round(e.clientY / gridSize) * gridSize;
      cursorRef.current.style.transform = `translate(${snappedX - 16}px, ${snappedY - 16}px)`;
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 size-8 border border-aura/40 pointer-events-none z-[9999] transition-all duration-75 ease-out flex items-center justify-center bg-aura/5 will-change-transform"
    >
      <div className="size-1 bg-aura rounded-full" />
    </div>
  );
}

export function KineticText({ children, className = "" }: { children: string; className?: string }) {
  const textRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<{ el: HTMLElement; x: number; y: number }[]>([]);
  const chars = children.split("");

  const updateCache = () => {
    if (!textRef.current) return;
    const childrenArray = Array.from(textRef.current.children) as HTMLElement[];
    charsRef.current = childrenArray.map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        el,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    });
  };

  useEffect(() => {
    updateCache();
    window.addEventListener("resize", updateCache);
    return () => window.removeEventListener("resize", updateCache);
  }, [children]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    charsRef.current.forEach((char) => {
      const dist = Math.hypot(mouseX - char.x, mouseY - char.y);
      const maxDist = 150;
      if (dist < maxDist) {
        const weight = Math.max(400, Math.min(900, 900 - (dist / maxDist) * 500));
        char.el.style.fontWeight = weight.toString();
        char.el.style.color = "var(--aura)";
      } else {
        char.el.style.fontWeight = "400";
        char.el.style.color = "";
      }
    });
  };

  const handleMouseLeave = () => {
    charsRef.current.forEach((char) => {
      char.el.style.fontWeight = "400";
      char.el.style.color = "";
    });
  };

  return (
    <div
      ref={textRef}
      className={`flex flex-wrap select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={updateCache}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="transition-[font-weight] duration-200 ease-out whitespace-pre will-change-[font-weight]"
          style={{ fontWeight: 400 }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export function ChronoCounter({ value }: { value: number }) {
  const digits = value.toString().split("");

  return (
    <div className="flex gap-0.5 font-mono overflow-hidden h-[1.2em] text-aura">
      {digits.map((digit, i) => (
        <div key={i} className="relative w-[0.6em] h-full flex flex-col" style={{
            animation: `chrono-tick 0.4s steps(5) forwards`,
            animationDelay: `${i * 0.05}s`
        }}>
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-[1.2em] shrink-0 flex items-center justify-center">
                {idx === 5 ? digit : Math.floor(Math.random() * 10)}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
