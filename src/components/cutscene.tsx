import { useEffect, useState } from "react";

export function Cutscene({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000), // Logo reveal
      setTimeout(() => setStage(2), 2500), // 3D explosion
      setTimeout(() => setStage(3), 4000), // Final transition
      setTimeout(() => onComplete(), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* 3D Space Container */}
      <div className="relative perspective-[1200px] w-full h-full flex items-center justify-center">
        {/* Background Aura Gradients */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-1000"
          style={{
            background: "radial-gradient(circle at 50% 50%, #f59e0b 0%, transparent 70%)",
            transform: stage >= 2 ? "scale(2) translateZ(-500px)" : "scale(1) translateZ(0)",
          }}
        />

        {/* Cinematic Logo */}
        <div
          className={`relative transition-all duration-1000 ease-out preserve-3d ${
            stage === 0
              ? "opacity-0 scale-90 translateZ(-200px)"
              : stage === 1
                ? "opacity-100 scale-100 translateZ(0)"
                : stage >= 2
                  ? "opacity-0 scale-150 translateZ(400px) blur-xl"
                  : ""
          }`}
        >
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-display italic tracking-tighter text-white">
              MVMAURA
            </h1>
            <div className="absolute -inset-4 bg-amber-500/20 blur-2xl animate-pulse" />
          </div>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-amber-500 mt-4 opacity-60">
            Aura Protocol Initializing
          </p>
        </div>

        {/* 3D SVG Particles / Shapes */}
        {stage >= 1 && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 1000"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {Array.from({ length: 12 }).map((_, i) => (
              <circle
                key={i}
                cx="500"
                cy="500"
                r={100 + i * 40}
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="4 10"
                className={`transition-all duration-[2000ms] ease-in-out ${
                  stage === 1
                    ? "opacity-20 scale-100 rotate-0"
                    : stage >= 2
                      ? "opacity-0 scale-[3] rotate-[180deg]"
                      : "opacity-0 scale-50"
                }`}
                style={{ transformOrigin: "center" }}
              />
            ))}

            {/* Core 3D Shape (SVG Mesh simulation) */}
            <g
              style={{ transformOrigin: "center" }}
              className={`transition-all duration-1000 ${
                stage === 2 ? "scale-150 rotate-y-[90deg]" : "scale-100"
              }`}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <path
                  key={i}
                  d="M500 300 L700 500 L500 700 L300 500 Z"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1"
                  className={`animate-pulse`}
                  style={{
                    transform: `rotate(${i * 45}deg) translateZ(${i * 20}px)`,
                    opacity: stage === 1 ? 0.4 : 0,
                  }}
                />
              ))}
            </g>
          </svg>
        )}

        {/* Glitch Overlay */}
        {stage === 2 && (
          <div className="absolute inset-0 bg-white/5 backdrop-invert-[0.05] animate-pulse pointer-events-none" />
        )}
      </div>

      <style>{`
        @keyframes cutscene-fade-out {
          to { opacity: 0; pointer-events: none; }
        }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}
