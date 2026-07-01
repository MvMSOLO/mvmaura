import { useEffect, useRef, useState } from "react";

// Every preview fills its parent card slot (h-40) and is purely visual.

export function ShimmerText() {
  return (
    <div className="text-3xl font-display italic tracking-tight shimmer-text">
      aura reading
    </div>
  );
}

export function IonPulsar() {
  return (
    <div className="relative">
      <div className="absolute inset-0 size-14 rounded-full border border-aura/40 animate-ping" />
      <div className="size-14 rounded-full border-2 border-aura shadow-[0_0_30px_-4px_var(--aura)]" />
    </div>
  );
}

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [tf, setTf] = useState("translate(0,0)");
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        setTf(`translate(${x * 0.25}px, ${y * 0.25}px)`);
      }}
      onMouseLeave={() => setTf("translate(0,0)")}
    >
      <button
        ref={ref}
        style={{ transform: tf }}
        className="px-6 py-2.5 rounded-full bg-aura text-[color:var(--primary-foreground)] font-medium text-sm shadow-[0_0_30px_-6px_var(--aura)] transition-transform duration-300 ease-out"
      >
        Aura →
      </button>
    </div>
  );
}

export function AuroraBg() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#f59e0b_0%,#7c3aed_20%,#22d3ee_45%,#f59e0b_70%,#7c3aed_100%)] opacity-60 blur-2xl [animation:aurora-drift_14s_linear_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export function GlowCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 50, y: 50 });
  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden rounded-md bg-[color:var(--surface-2)]"
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setP({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
    >
      <div
        className="absolute size-40 rounded-full pointer-events-none"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, var(--aura) 0%, transparent 60%)",
          filter: "blur(20px)",
          opacity: 0.7,
        }}
      />
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-4">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="border border-white/[0.04]" />
        ))}
      </div>
    </div>
  );
}

export function FadeSlide() {
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => v + 1), 2400);
    return () => clearInterval(id);
  }, []);
  const words = ["fade.", "slide.", "reveal.", "aura."];
  return (
    <div key={k} className="text-2xl font-display italic animate-[float-y_2s_ease-in-out_infinite]">
      <span className="inline-block animate-[slide-up-in_0.6s_ease-out] text-foreground">
        {words[k % words.length]}
      </span>
    </div>
  );
}

export function TypewriterCode() {
  const full = "> const aura = new Motion()";
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setN((v) => (v + 1) % (full.length + 12)), 90);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="font-mono text-sm text-aura">
      {full.slice(0, Math.min(n, full.length))}
      <span className="inline-block w-1.5 h-4 bg-aura ml-0.5 align-middle animate-pulse" />
    </div>
  );
}

export function MarqueeTags() {
  const items = ["motion", "aura", "shader", "spring", "ease", "signal", "prism", "pulse"];
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-3 w-max animate-[marquee-x_18s_linear_infinite]">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-[color:var(--surface-2)] text-xs font-mono text-text-muted ring-1 ring-white/5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OrbitLoader() {
  return (
    <div className="relative size-16">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div
        className="absolute inset-0 animate-spin"
        style={{ animationDuration: "3s" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-2 rounded-full bg-aura shadow-[0_0_12px_var(--aura)]" />
      </div>
      <div
        className="absolute inset-2 animate-spin"
        style={{ animationDuration: "1.6s", animationDirection: "reverse" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-white/70" />
      </div>
    </div>
  );
}

export function GradientBorder() {
  return (
    <div className="relative p-[1.5px] rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,var(--aura)_25%,transparent_50%,var(--aura)_75%,transparent_100%)] animate-spin" style={{ animationDuration: "4s" }} />
      <div className="relative bg-[color:var(--surface)] rounded-[10px] px-5 py-3 font-mono text-sm">
        aura::border
      </div>
    </div>
  );
}

export function GlitchText() {
  return (
    <div className="relative font-display text-3xl italic">
      <span className="text-foreground">glitch</span>
      <span className="absolute inset-0 text-aura mix-blend-screen translate-x-[2px] animate-pulse">glitch</span>
      <span className="absolute inset-0 text-cyan-400 mix-blend-screen -translate-x-[2px] opacity-70">glitch</span>
    </div>
  );
}

export function SkeletonWave() {
  return (
    <div className="w-full max-w-[220px] space-y-2">
      {[80, 60, 90].map((w, i) => (
        <div key={i} className="h-3 rounded-full overflow-hidden bg-[color:var(--surface-2)]" style={{ width: `${w}%` }}>
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-aura to-transparent [animation:marquee-x_1.8s_linear_infinite]" />
        </div>
      ))}
    </div>
  );
}