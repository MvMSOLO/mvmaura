import React, { useEffect, useState, useRef } from "react";

export function GridSnapCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const gridSize = 32;

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const snappedX = Math.round(e.clientX / gridSize) * gridSize;
      const snappedY = Math.round(e.clientY / gridSize) * gridSize;
      setPos({ x: snappedX, y: snappedY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 size-8 border border-aura/40 pointer-events-none z-[9999] transition-all duration-75 ease-out flex items-center justify-center bg-aura/5"
      style={{
        transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
      }}
    >
      <div className="size-1 bg-aura rounded-full" />
    </div>
  );
}

export function KineticText({ children, className = "" }: { children: string; className?: string }) {
  const [weights, setWeights] = useState<number[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const chars = children.split("");

  useEffect(() => {
    setWeights(new Array(chars.length).fill(400));
  }, [children]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const newWeights = chars.map((_, i) => {
      const charEl = textRef.current?.children[i] as HTMLElement;
      if (!charEl) return 400;
      const charRect = charEl.getBoundingClientRect();
      const charCenterX = charRect.left + charRect.width / 2;
      const charCenterY = charRect.top + charRect.height / 2;

      const dist = Math.hypot(mouseX - charCenterX, mouseY - charCenterY);
      const maxDist = 200;
      const weight = Math.max(100, Math.min(900, 900 - (dist / maxDist) * 800));
      return weight;
    });

    setWeights(newWeights);
  };

  const handleMouseLeave = () => {
    setWeights(new Array(chars.length).fill(400));
  };

  return (
    <div
      ref={textRef}
      className={`flex flex-wrap ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className="transition-[font-weight] duration-200 ease-out whitespace-pre"
          style={{ fontWeight: weights[i] || 400 }}
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
