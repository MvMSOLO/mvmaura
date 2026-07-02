import { useEffect, useRef, useState } from "react";

// Every preview fills its parent card slot (h-40) and is purely visual.

export function ShimmerText() {
  return (
    <div className="text-3xl font-display italic tracking-tight shimmer-text">aura reading</div>
  );
}

export function FloatingIsland() {
  return (
    <div className="relative group perspective-[1000px]">
      <div className="relative w-40 h-24 bg-gradient-to-b from-surface-2 to-background rounded-[2rem] border border-white/10 shadow-2xl animate-[island-float_6s_ease-in-out_infinite] preserve-3d">
        <div className="absolute -inset-2 bg-aura/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 left-4 size-6 rounded-lg bg-aura/40 border border-aura/60 animate-pulse" />
        <div className="absolute bottom-4 right-4 space-y-1">
          <div className="h-1.5 w-12 bg-white/20 rounded-full" />
          <div className="h-1.5 w-8 bg-white/10 rounded-full" />
        </div>
      </div>
      <style>{`
        @keyframes island-float {
          0%, 100% { transform: translateY(0) rotateX(10deg) rotateY(-5deg); }
          50% { transform: translateY(-15px) rotateX(15deg) rotateY(5deg); }
        }
      `}</style>
    </div>
  );
}

export function Floating3DCard() {
  return (
    <div className="relative perspective-[1000px] group">
      <div className="size-32 bg-gradient-to-br from-aura/20 to-surface-2 border border-white/10 rounded-2xl animate-[float-3d_6s_infinite_ease-in-out] preserve-3d">
        <div className="absolute inset-0 bg-aura opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />
        <div className="absolute inset-4 border border-aura/20 rounded-xl" />
      </div>
      <style>{`
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(10deg) rotateY(10deg); }
          50% { transform: translateY(-20px) rotateX(-10deg) rotateY(-10deg); }
        }
      `}</style>
    </div>
  );
}

export function NeonLine() {
  return (
    <div className="relative w-full h-1 bg-white/5 overflow-hidden rounded-full">
      <div className="absolute inset-0 bg-aura shadow-[0_0_15px_var(--aura)] animate-[neon-sweep_2s_infinite_linear]" />
      <style>{`
        @keyframes neon-sweep {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

export function ElasticText() {
  return (
    <div className="flex gap-2 text-3xl font-display italic">
      {"BOUNCE".split("").map((c, i) => (
        <span
          key={i}
          className="hover:animate-[elastic-char_0.5s_ease-out]"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {c}
        </span>
      ))}
      <style>{`
        @keyframes elastic-char {
          0% { transform: scaleY(1); }
          50% { transform: scaleY(1.5) scaleX(0.8); color: var(--aura); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}

export function LiquidLoader() {
  return (
    <div className="size-16 relative overflow-hidden rounded-full border-2 border-aura/30 flex items-end">
      <div className="absolute inset-0 bg-aura/10" />
      <div
        className="w-full bg-aura animate-[liquid-fill_4s_infinite_linear]"
        style={{ height: "60%" }}
      />
      <style>{`
        @keyframes liquid-fill {
          0% { height: 0%; filter: hue-rotate(0deg); }
          50% { height: 100%; filter: hue-rotate(90deg); }
          100% { height: 0%; filter: hue-rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

export function AuraStarfield() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-lg">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-0.5 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-aura/10 to-transparent" />
    </div>
  );
}

export function MagneticAuraButton() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      className="relative p-8"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - (r.left + r.width / 2)) * 0.3,
          y: (e.clientY - (r.top + r.height / 2)) * 0.3,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <div
        className="absolute inset-0 bg-aura opacity-10 blur-2xl rounded-full transition-transform duration-300"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(1.2)` }}
      />
      <button
        className="relative px-6 py-2 bg-surface-2 border border-white/10 rounded-full transition-transform duration-200"
        style={{ transform: `translate(${pos.x * 0.5}px, ${pos.y * 0.5}px)` }}
      >
        Aura
      </button>
    </div>
  );
}

export function CyberPulse() {
  return (
    <div className="relative size-16 flex items-center justify-center">
      <div className="absolute inset-0 border border-aura/20 rounded-lg animate-ping" />
      <div className="size-12 border border-aura rounded-md shadow-[0_0_20px_var(--aura-soft)]" />
      <div className="size-4 bg-aura rounded-sm animate-pulse" />
    </div>
  );
}

export function PrismLoader() {
  return (
    <div className="flex gap-2 items-end h-8">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-2 bg-aura animate-[prism-grow_1.5s_infinite_ease-in-out]"
          style={{
            animationDelay: `${i * 0.15}s`,
            filter: `hue-rotate(${i * 45}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes prism-grow {
          0%, 100% { height: 20%; opacity: 0.3; }
          50% { height: 100%; opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export function FloatingTags() {
  const tags = ["React", "Motion", "Tailwind", "Aura"];
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((t, i) => (
        <span
          key={i}
          className="px-2 py-1 bg-surface-2 border border-white/10 rounded text-[10px] font-mono animate-[float-tag_3s_infinite_ease-in-out]"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          {t}
        </span>
      ))}
      <style>{`
        @keyframes float-tag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}

export function GlitchTextMedium() {
  return (
    <div className="relative font-display text-4xl italic group overflow-hidden">
      <span className="block group-hover:translate-x-1 transition-transform">GLITCH</span>
      <div className="absolute inset-0 bg-red-500/20 mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
      <div
        className="absolute inset-0 bg-blue-500/20 mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
        style={{ animationDelay: "0.2s" }}
      />
    </div>
  );
}

export function InteractiveGridDots() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-6 gap-2 p-4">
      {Array.from({ length: 36 }).map((_, i) => (
        <div
          key={i}
          className={`size-1.5 rounded-full transition-all duration-300 ${hovered === i ? "bg-aura scale-150 shadow-[0_0_10px_var(--aura)]" : "bg-white/10"}`}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}
    </div>
  );
}

export function AuraSpinner() {
  return (
    <div className="size-12 border-4 border-aura/20 border-t-aura rounded-full animate-spin" />
  );
}

export function CyberScan() {
  return (
    <div className="relative w-48 h-28 bg-surface-2 rounded-lg overflow-hidden border border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px]" />
      <div className="absolute top-0 left-0 w-full h-0.5 bg-aura shadow-[0_0_15px_var(--aura)] animate-[scan-sweep_4s_infinite_linear]" />
      <div className="p-4">
        <div className="h-2 w-3/4 bg-white/10 rounded mb-2" />
        <div className="h-2 w-1/2 bg-white/10 rounded" />
      </div>
      <style>{`
        @keyframes scan-sweep {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}

export function FloatingSphere() {
  return (
    <div className="size-20 rounded-full bg-gradient-to-br from-aura/40 to-transparent relative group">
      <div className="absolute inset-0 bg-aura opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
      <div className="absolute inset-2 border border-white/10 rounded-full animate-pulse" />
    </div>
  );
}

export function WaveText() {
  return (
    <div className="flex gap-0.5">
      {"WAVING".split("").map((c, i) => (
        <span
          key={i}
          className="text-2xl font-display italic animate-[text-wave_2s_infinite_ease-in-out]"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {c}
        </span>
      ))}
      <style>{`
        @keyframes text-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); color: var(--aura); }
        }
      `}</style>
    </div>
  );
}

export function BentoHover() {
  return (
    <div className="relative w-40 h-28 bg-surface-2 rounded-xl border border-white/5 p-4 overflow-hidden group">
      <div className="absolute inset-0 bg-aura opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      <div className="relative z-10 size-8 bg-background rounded-lg border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="size-2 bg-aura rounded-full" />
      </div>
      <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full" />
    </div>
  );
}

export function ParticleCircle() {
  return (
    <div className="relative size-24 flex items-center justify-center">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-1 bg-aura rounded-full"
          style={{
            transform: `rotate(${i * 18}deg) translateY(-40px)`,
            opacity: Math.random(),
            animation: `orbit-fade 2s infinite ease-in-out`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes orbit-fade {
          0%, 100% { opacity: 0.2; transform: rotate(var(--rot)) translateY(-40px) scale(0.5); }
          50% { opacity: 1; transform: rotate(var(--rot)) translateY(-50px) scale(1.2); }
        }
      `}</style>
    </div>
  );
}

export function CyberButton() {
  return (
    <button className="relative px-8 py-3 bg-transparent text-aura font-mono uppercase tracking-widest overflow-hidden group">
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        Initiate
      </span>
      <div className="absolute inset-0 border border-aura/30 group-hover:border-aura transition-colors" />
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-aura" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-aura" />
      <div className="absolute inset-0 bg-aura/0 group-hover:bg-aura/10 transition-colors" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-aura to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-aura to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
    </button>
  );
}

export function WarpDriveBg() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-[warp_2s_linear_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: "1px",
              height: `${20 + Math.random() * 50}px`,
              opacity: Math.random(),
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes warp {
          0% { transform: translateY(-100%) scaleY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%) scaleY(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function GooeyLoader() {
  return (
    <div className="relative size-16 flex items-center justify-center">
      <svg className="absolute invisible">
        <defs>
          <filter id="goo-loader">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            />
          </filter>
        </defs>
      </svg>
      <div className="flex gap-4 filter-[url(#goo-loader)]">
        <div className="size-6 rounded-full bg-aura animate-[goo-left_1.5s_infinite_ease-in-out]" />
        <div className="size-6 rounded-full bg-aura animate-[goo-right_1.5s_infinite_ease-in-out]" />
      </div>
      <style>{`
        @keyframes goo-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
        @keyframes goo-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px); }
        }
      `}</style>
    </div>
  );
}

export function RetroGrid() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden rounded-lg perspective-[200px]">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[length:20px_20px]"
        style={{ transform: "rotateX(60deg) translateY(-20px)", transformOrigin: "top" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 bg-aura/20 blur-3xl animate-pulse" />
    </div>
  );
}

export function SpotlightCard() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div
      className="relative w-48 h-28 bg-surface-2 rounded-xl border border-white/5 overflow-hidden group"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, var(--aura-soft) 0%, transparent 60%)`,
        }}
      />
      <div className="p-4 relative z-10">
        <div className="size-6 bg-white/10 rounded group-hover:bg-aura/20 transition-colors" />
        <div className="mt-2 h-2 w-20 bg-white/5 rounded" />
      </div>
    </div>
  );
}

export function PixelText() {
  return (
    <div className="flex gap-1">
      {"PIXELS".split("").map((char, i) => (
        <span
          key={i}
          className="font-mono text-2xl text-aura animate-[pixel-fade_2s_infinite]"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          {char}
        </span>
      ))}
      <style>{`
        @keyframes pixel-fade {
          0%, 100% { opacity: 0.2; filter: blur(2px); }
          50% { opacity: 1; filter: blur(0px); }
        }
      `}</style>
    </div>
  );
}

export function AuraRing() {
  return (
    <div className="relative size-24 flex items-center justify-center">
      <div className="absolute inset-0 border-2 border-aura/30 rounded-full animate-[spin_4s_linear_infinite]" />
      <div className="absolute inset-2 border-2 border-cyan-500/30 rounded-full animate-[spin_3s_linear_infinite_reverse]" />
      <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-[spin_2s_linear_infinite]" />
      <div className="size-2 bg-white rounded-full shadow-[0_0_15px_white]" />
    </div>
  );
}

export function CyberSwitch() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className="relative w-16 h-8 bg-black border border-aura/20 rounded flex items-center px-1 transition-colors"
      style={{ borderColor: on ? "var(--aura)" : "" }}
    >
      <div
        className="absolute inset-0 bg-aura/5 opacity-0 transition-opacity"
        style={{ opacity: on ? 1 : 0 }}
      />
      <div
        className="size-5 bg-aura/20 border border-aura/40 transition-all duration-300 relative z-10"
        style={{
          transform: on ? "translateX(32px)" : "translateX(0)",
          backgroundColor: on ? "var(--aura)" : "",
        }}
      >
        <div
          className="absolute inset-0 bg-white/40 animate-pulse"
          style={{ display: on ? "block" : "none" }}
        />
      </div>
      <div
        className="absolute right-2 text-[8px] font-mono text-aura/40"
        style={{ display: on ? "none" : "block" }}
      >
        OFF
      </div>
      <div
        className="absolute left-2 text-[8px] font-mono text-white"
        style={{ display: on ? "block" : "none" }}
      >
        ON
      </div>
    </button>
  );
}

export function FloatingIcons() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-4">
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="size-10 bg-surface-2 border border-white/10 rounded-lg flex items-center justify-center animate-[float-icon_4s_infinite_ease-in-out]"
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          <div className="size-4 bg-aura/40 rounded-sm" />
        </div>
      ))}
      <style>{`
        @keyframes float-icon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}

export function RippleEffect() {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  return (
    <div
      className="relative w-48 h-28 bg-surface-2 rounded-xl overflow-hidden cursor-pointer"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setRipples([...ripples, { x: e.clientX - r.left, y: e.clientY - r.top, id: Date.now() }]);
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-text-muted">
        CLICK ME
      </div>
      {ripples.map((rip) => (
        <div
          key={rip.id}
          className="absolute size-4 bg-aura/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-[ripple_1s_ease-out_forwards]"
          style={{ left: rip.x, top: rip.y }}
          onAnimationEnd={() => setRipples((prev) => prev.filter((r) => r.id !== rip.id))}
        />
      ))}
      <style>{`
        @keyframes ripple {
          from { transform: scale(0); opacity: 1; }
          to { transform: scale(30); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function PrismBorder() {
  return (
    <div className="relative p-1 rounded-lg overflow-hidden group">
      <div className="absolute -inset-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)] opacity-40 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-background rounded-[4px] px-6 py-2 text-xs font-mono">
        prism::active
      </div>
    </div>
  );
}

export function MagneticGrid() {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden rounded-lg grid grid-cols-10 grid-rows-6 gap-2 p-2"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
    >
      {Array.from({ length: 60 }).map((_, i) => {
        const x = (i % 10) * 20 + 10;
        const y = Math.floor(i / 10) * 20 + 10;
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, (100 - dist) / 10);
        return (
          <div
            key={i}
            className="size-1 bg-white/20 rounded-full transition-transform duration-100"
            style={{
              transform: `translate(${dx * force * 0.1}px, ${dy * force * 0.1}px)`,
              backgroundColor: dist < 50 ? "var(--aura)" : "",
            }}
          />
        );
      })}
    </div>
  );
}

export function InfiniteTiles() {
  return (
    <div className="relative w-full h-24 overflow-hidden border-y border-white/5">
      <div className="flex gap-4 animate-[scroll-tiles_10s_linear_infinite]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 size-16 bg-surface-2 rounded-lg border border-white/10 flex items-center justify-center"
          >
            <div className="size-8 bg-aura/10 rounded" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-tiles {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export function GlassMorphismCard() {
  return (
    <div className="relative w-48 h-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
      <div className="absolute -top-10 -right-10 size-20 bg-aura/20 blur-2xl group-hover:bg-aura/40 transition-colors" />
      <div className="p-4">
        <div className="size-8 rounded-full bg-white/10 border border-white/20" />
        <div className="mt-4 space-y-2">
          <div className="h-1.5 w-24 bg-white/20 rounded-full" />
          <div className="h-1.5 w-16 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function HologramAvatar() {
  return (
    <div className="relative size-20 rounded-full overflow-hidden border-2 border-aura/30 group">
      <div className="absolute inset-0 bg-aura/20 animate-pulse" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(245,158,11,0.1)_2px,rgba(245,158,11,0.1)_4px)] animate-[hologram-scan_4s_linear_infinite]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-12 rounded-full bg-aura/40 blur-sm group-hover:blur-md transition-all" />
      </div>
      <style>{`
        @keyframes hologram-scan {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
      `}</style>
    </div>
  );
}

export function LiquidText() {
  return (
    <div className="relative text-4xl font-display italic tracking-widest text-aura overflow-hidden group">
      <span className="relative z-10">LIQUID</span>
      <div className="absolute inset-0 bg-aura/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <svg viewBox="0 0 100 20" className="w-full animate-[liquid-wave_3s_infinite_linear]">
          <path d="M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z" fill="var(--aura)" />
        </svg>
      </div>
      <style>{`
        @keyframes liquid-wave {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

export function BentoGridItem() {
  return (
    <div className="relative w-48 h-32 bg-surface-2 rounded-2xl border border-white/5 p-4 overflow-hidden group hover:border-aura/30 transition-colors">
      <div className="absolute top-2 right-2 size-6 rounded-full bg-background flex items-center justify-center">
        <div className="size-2 bg-aura rounded-full animate-ping" />
      </div>
      <div className="h-full flex flex-col justify-end">
        <div className="h-1.5 w-12 bg-aura/40 rounded-full mb-2" />
        <div className="h-1.5 w-24 bg-white/5 rounded-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-aura/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

export function TextRevealScroll() {
  return (
    <div className="relative h-12 overflow-hidden group">
      <div className="flex flex-col transition-transform duration-700 group-hover:-translate-y-full">
        <div className="h-12 flex items-center text-2xl font-mono text-text-muted">
          Hover to reveal
        </div>
        <div className="h-12 flex items-center text-2xl font-mono text-aura">HIDDEN PROTOCOL</div>
      </div>
    </div>
  );
}

export function FloatingDock() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="flex items-end gap-2 bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10 h-16">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="size-8 bg-surface-2 rounded-lg border border-white/5 transition-all duration-300"
          style={{
            height:
              hovered === i ? "48px" : hovered === i - 1 || hovered === i + 1 ? "40px" : "32px",
            width:
              hovered === i ? "48px" : hovered === i - 1 || hovered === i + 1 ? "40px" : "32px",
            backgroundColor: hovered === i ? "var(--aura)" : "",
          }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}
    </div>
  );
}

export function InteractiveDNA() {
  return (
    <div className="flex gap-2 h-20 items-center rotate-45">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between h-full items-center animate-[dna-pulse_2s_infinite]"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <div className="size-2 rounded-full bg-aura shadow-[0_0_10px_var(--aura)] hover:scale-150 transition-transform" />
          <div className="w-[1px] flex-1 bg-white/10" />
          <div className="size-2 rounded-full bg-white/40 hover:scale-150 transition-transform" />
        </div>
      ))}
      <style>{`
        @keyframes dna-pulse {
          0%, 100% { height: 100%; opacity: 0.5; }
          50% { height: 60%; opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export function CyberLoader() {
  return (
    <div className="relative size-16">
      <svg className="size-full animate-spin [animation-duration:4s]" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="var(--aura)"
          strokeWidth="0.5"
          strokeDasharray="1 5"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="60 180"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-mono text-[8px] text-aura animate-pulse">
        LDR_99
      </div>
    </div>
  );
}

export function NoiseBg() {
  return (
    <div className="relative w-full h-full bg-neutral-900 overflow-hidden rounded-lg">
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-aura/10 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 h-1.5 w-1/2 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-aura animate-[noise-progress_3s_infinite_ease-in-out]" />
      </div>
      <style>{`
        @keyframes noise-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

export function MagneticText() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      className="relative cursor-pointer py-4"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - (r.left + r.width / 2)) * 0.5,
          y: (e.clientY - (r.top + r.height / 2)) * 0.5,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <span
        className="block text-3xl font-display italic transition-transform duration-200"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        Pull <span className="text-aura">Closer</span>
      </span>
    </div>
  );
}

export function GlowButton() {
  return (
    <button className="relative px-6 py-2 bg-background border border-white/10 rounded-lg group overflow-hidden">
      <div className="absolute inset-0 bg-aura opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
      <div className="absolute -inset-[500%] group-hover:animate-[glow-spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,var(--aura),transparent)] opacity-0 group-hover:opacity-100" />
      <span className="relative z-10 font-medium group-hover:text-white transition-colors">
        Surge
      </span>
      <style>{`
        @keyframes glow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}

export function FloatingIslandSmall() {
  return (
    <div className="relative animate-[float-island-s_4s_infinite_ease-in-out]">
      <div className="w-24 h-4 bg-surface-2 rounded-full border border-white/10 shadow-2xl relative">
        <div className="absolute -top-6 left-4 size-4 bg-aura rounded rotate-45 animate-bounce" />
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-black/40 blur-md animate-[shadow-scale_4s_infinite_ease-in-out]" />
      <style>{`
        @keyframes float-island-s {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shadow-scale {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
          50% { transform: translateX(-50%) scale(1.5); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}

export function AuraGrid() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden rounded-lg grid grid-cols-4 gap-1 p-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="bg-surface-2 rounded border border-white/[0.03] animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="size-full bg-aura opacity-0 hover:opacity-10 transition-opacity" />
        </div>
      ))}
    </div>
  );
}

export function GlitchLogo() {
  return (
    <div className="relative group">
      <span className="font-display italic text-5xl relative z-10 group-hover:animate-glitch-primary">
        MVM
      </span>
      <span className="absolute inset-0 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-sec-1">
        MVM
      </span>
      <span className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-sec-2">
        MVM
      </span>
      <style>{`
        @keyframes glitch-primary {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  );
}

export function HolographicCard() {
  return (
    <div className="relative w-40 h-24 rounded-lg bg-surface-2 overflow-hidden border border-white/10 group">
      <div className="absolute inset-0 bg-gradient-to-tr from-aura/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,0.05)_2px,rgba(255,255,255,0.05)_4px)]" />
      <div className="p-4 flex flex-col justify-end h-full">
        <div className="h-1 w-12 bg-aura rounded-full mb-1" />
        <div className="h-1 w-8 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

export function WaveButton() {
  return (
    <button className="relative px-6 py-2 bg-aura text-black font-semibold rounded-lg overflow-hidden group">
      <span className="relative z-10">WAVE</span>
      <div className="absolute bottom-0 left-0 w-full h-0 bg-black/20 group-hover:h-full transition-all duration-300 ease-in-out" />
      <svg
        className="absolute top-1/2 left-0 w-full h-8 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        viewBox="0 0 100 20"
      >
        <path
          d="M0 10 Q 25 20 50 10 T 100 10"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="animate-[liquid-wave_2s_infinite_linear]"
        />
      </svg>
    </button>
  );
}

export function ScanTextLoader() {
  return (
    <div className="font-mono text-xs tracking-[0.2em] relative overflow-hidden group">
      <span className="text-white/20 group-hover:text-white transition-colors">
        INITIALIZING_PROTOCOL
      </span>
      <div className="absolute inset-0 text-aura animate-[scan-loader_3s_infinite_steps(20)] overflow-hidden w-0 whitespace-nowrap">
        INITIALIZING_PROTOCOL
      </div>
      <style>{`
        @keyframes scan-loader {
          0% { w: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export function OrbitDots() {
  return (
    <div className="relative size-16">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: `${2 + i * 0.3}s`, transform: `rotate(${i * 45}deg)` }}
        >
          <div className="size-1 bg-aura rounded-full absolute top-0 left-1/2 -translate-x-1/2 opacity-60" />
        </div>
      ))}
    </div>
  );
}

export function InteractiveBlob() {
  const [scale, setScale] = useState(1);
  return (
    <div
      className="size-20 bg-aura opacity-30 blur-2xl rounded-full transition-transform duration-500 cursor-pointer"
      style={{ transform: `scale(${scale})` }}
      onMouseEnter={() => setScale(1.5)}
      onMouseLeave={() => setScale(1)}
    />
  );
}

export function GridHover() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-4 gap-1 p-1 bg-surface-2 rounded-lg">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className={`size-8 rounded transition-colors ${active === i ? "bg-aura" : "bg-background/40"}`}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
        />
      ))}
    </div>
  );
}

export function PixelLoader() {
  return (
    <div className="grid grid-cols-3 gap-0.5 animate-pulse">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="size-2 bg-aura" style={{ opacity: Math.random() }} />
      ))}
    </div>
  );
}

export function MagneticCard() {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  return (
    <div
      className="relative w-40 h-24 perspective-[800px] cursor-pointer"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setRot({
          x: (e.clientY - (r.top + r.height / 2)) / 5,
          y: -(e.clientX - (r.left + r.width / 2)) / 5,
        });
      }}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
    >
      <div
        className="size-full bg-surface-2 rounded-lg border border-white/10 transition-transform duration-100 flex items-center justify-center"
        style={{ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}
      >
        <div className="size-8 bg-aura/20 rounded rotate-45 border border-aura/40" />
      </div>
    </div>
  );
}

export function AuraTextFloat() {
  return (
    <div className="text-2xl font-display italic animate-[aura-float_4s_infinite_ease-in-out] shimmer-text">
      Floating Aura
      <style>{`
        @keyframes aura-float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}

export function CyberPanel() {
  return (
    <div className="relative w-48 h-28 bg-black/40 border-l-4 border-aura p-4 overflow-hidden group">
      <div className="absolute top-0 right-0 p-1 bg-aura/10 text-[8px] font-mono text-aura">
        SEC_01
      </div>
      <div className="space-y-2">
        <div className="h-1 w-full bg-white/5 rounded" />
        <div className="h-1 w-3/4 bg-white/5 rounded" />
        <div className="h-1 w-1/2 bg-aura/20 rounded" />
      </div>
      <div className="absolute bottom-2 right-2 size-2 bg-aura animate-ping" />
    </div>
  );
}

export function GridPulse() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-surface">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 bg-aura/30 blur-[80px] animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-1 bg-aura rounded-full shadow-[0_0_20px_var(--aura)] animate-ping" />
      </div>
    </div>
  );
}

export function MagneticSocialBtn() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * 0.4,
      y: (e.clientY - (r.top + r.height / 2)) * 0.4,
    });
  };
  return (
    <button
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="size-14 rounded-2xl bg-surface-2 border border-white/10 flex items-center justify-center transition-all duration-200 hover:border-aura/50 group"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div className="size-6 bg-white/20 rounded-full group-hover:bg-aura transition-colors animate-bounce" />
    </button>
  );
}

export function NeonScroll() {
  return (
    <div className="relative w-1 h-20 bg-white/5 rounded-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-aura to-transparent animate-[neon-scroll_2s_linear_infinite]" />
      <style>{`
        @keyframes neon-scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
}

export function ScanlineText() {
  return (
    <div className="relative group overflow-hidden px-4 py-2 bg-black/40 rounded border border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-aura/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="font-mono text-xl tracking-widest text-aura/80 uppercase group-hover:text-aura transition-colors">
        Authenticating...
      </span>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-aura/40 animate-[scanline_3s_linear_infinite]" />
      <style>{`
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function AuraBlob() {
  return (
    <div className="relative size-32">
      <div className="absolute inset-0 bg-aura opacity-30 blur-3xl animate-[blob-pulse_8s_infinite]" />
      <div className="absolute inset-0 border-2 border-aura/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_10s_linear_infinite]" />
      <div className="absolute inset-4 border border-white/10 rounded-[60%_40%_30%_70%/50%_30%_70%_50%] animate-[spin_15s_linear_infinite_reverse]" />
      <style>{`
        @keyframes blob-pulse {
          0%, 100% { transform: scale(1); filter: blur(30px); }
          50% { transform: scale(1.4); filter: blur(50px); }
        }
      `}</style>
    </div>
  );
}

export function LiquidBlobButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-aura/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <button
        className="relative px-8 py-3 rounded-2xl bg-surface-2 text-foreground font-semibold overflow-hidden transition-transform duration-300 active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">Liquid Aura</span>
        <div
          className="absolute inset-0 z-0 opacity-40 transition-transform duration-700 ease-out"
          style={{
            background:
              "radial-gradient(circle at var(--x, 50%) var(--y, 50%), var(--aura) 0%, transparent 50%)",
            transform: isHovered ? "scale(2.5)" : "scale(0)",
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <circle cx="20" cy="20" r="15" fill="var(--aura)" className="animate-pulse" />
            <circle
              cx="80"
              cy="20"
              r="12"
              fill="var(--aura)"
              style={{ animationDelay: "1s" }}
              className="animate-pulse"
            />
            <circle
              cx="50"
              cy="80"
              r="18"
              fill="var(--aura)"
              style={{ animationDelay: "2s" }}
              className="animate-pulse"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export function TiltCard3D() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: (x / box.width) * 100, y: (y / box.height) * 100, opacity: 0.6 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className="perspective-[1000px] w-full max-w-[200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative h-32 rounded-xl bg-surface-2 border border-white/10 transition-transform duration-200 ease-out preserve-3d"
        style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transition-opacity duration-300"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
            }}
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <span className="text-sm font-mono text-aura">3D::ELEVATE</span>
        </div>
      </div>
    </div>
  );
}

export function HolographicText() {
  return (
    <div className="relative group cursor-default">
      <h2 className="text-4xl font-display italic tracking-widest relative">
        <span className="absolute inset-0 text-white blur-[2px] opacity-20 group-hover:opacity-40 transition-opacity">
          HOLOGRAPH
        </span>
        <span
          className="bg-clip-text text-transparent animate-[hologram_5s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff0000)",
            backgroundSize: "400% 100%",
          }}
        >
          HOLOGRAPH
        </span>
      </h2>
      <style>{`
        @keyframes hologram {
          0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
          100% { background-position: 400% 50%; filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export function CyberpunkBorder() {
  return (
    <div className="relative p-1 group">
      <div className="absolute inset-0 bg-aura opacity-20 group-hover:opacity-40 transition-opacity" />
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-aura animate-pulse" />
      <div
        className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-aura animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-aura animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-aura animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative bg-background px-6 py-3 border border-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-aura/50 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <span className="font-mono text-xs tracking-tighter group-hover:text-aura transition-colors">
          PROTOCOL_AURORA
        </span>
      </div>
    </div>
  );
}

export function DNAHelixLoader() {
  return (
    <div className="flex gap-1 h-12 items-center">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between h-full items-center"
          style={{
            animation: `dna-rotate 2s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        >
          <div className="size-1.5 rounded-full bg-aura shadow-[0_0_8px_var(--aura)]" />
          <div className="w-[1px] flex-1 bg-white/10" />
          <div className="size-1.5 rounded-full bg-white/40" />
        </div>
      ))}
      <style>{`
        @keyframes dna-rotate {
          0%, 100% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(0.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export function RefractiveGlass() {
  return (
    <div className="relative w-48 h-28 group">
      <div className="absolute inset-0 bg-gradient-to-br from-aura/20 via-transparent to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="size-8 rounded-lg bg-aura/20 border border-aura/30 animate-pulse" />
          <div className="space-y-1.5">
            <div className="h-2 w-24 bg-white/20 rounded-full" />
            <div className="h-2 w-16 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MagneticTrailLink() {
  const [dots, setDots] = useState<{ x: number; y: number; id: number }[]>([]);
  const nextId = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = nextId.current++;
    setDots((prev) => [...prev.slice(-10), { x, y, id }]);
  };

  return (
    <div
      className="relative px-8 py-4 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setDots([])}
    >
      {dots.map((dot, i) => (
        <div
          key={dot.id}
          className="absolute size-1.5 rounded-full bg-aura pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
            opacity: i / dots.length,
            transform: `scale(${i / dots.length}) translate(-50%, -50%)`,
            transition: "opacity 0.2s, transform 0.2s",
          }}
        />
      ))}
      <span className="relative z-10 font-display italic text-2xl group-hover:text-aura transition-colors">
        Trace Motion
      </span>
    </div>
  );
}

export function ElasticToggle() {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => setActive(!active)}
      className="relative w-16 h-8 rounded-full bg-surface-2 border border-white/10 p-1 transition-colors duration-500"
      style={{ backgroundColor: active ? "var(--aura)" : "" }}
    >
      <div
        className="size-6 rounded-full bg-white transition-all duration-500"
        style={{
          transform: active ? "translateX(32px)" : "translateX(0)",
          borderRadius: active ? "30% 70% 70% 30% / 30% 30% 70% 70%" : "50%",
          boxShadow: active ? "0 0 20px rgba(255,255,255,0.4)" : "",
        }}
      />
    </button>
  );
}

export function MorphingShape() {
  return (
    <div className="relative group">
      <div className="size-20 bg-aura shadow-[0_0_40px_var(--aura-soft)] animate-[morph_8s_ease-in-out_infinite]" />
      <style>{`
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
          33% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(120deg) scale(1.1); }
          66% { border-radius: 100% 20% 50% 80% / 40% 20% 80% 60%; transform: rotate(240deg) scale(0.9); }
        }
      `}</style>
    </div>
  );
}

export function ParticleField() {
  return (
    <div className="relative w-full h-full bg-background/40 rounded-lg overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-1 bg-aura/40 rounded-full animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-mono text-text-muted">PARTICLE_DOMAIN</span>
      </div>
      <style>{`
        @keyframes float-particle {
          0% { transform: translate(0, 0) opacity(0); }
          50% { opacity: 1; }
          100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: 0; }
        }
      `}</style>
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
        setP({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
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
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
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
      <div
        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,var(--aura)_25%,transparent_50%,var(--aura)_75%,transparent_100%)] animate-spin"
        style={{ animationDuration: "4s" }}
      />
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
      <span className="absolute inset-0 text-aura mix-blend-screen translate-x-[2px] animate-pulse">
        glitch
      </span>
      <span className="absolute inset-0 text-cyan-400 mix-blend-screen -translate-x-[2px] opacity-70">
        glitch
      </span>
    </div>
  );
}

export function SkeletonWave() {
  return (
    <div className="w-full max-w-[220px] space-y-2">
      {[80, 60, 90].map((w, i) => (
        <div
          key={i}
          className="h-3 rounded-full overflow-hidden bg-[color:var(--surface-2)]"
          style={{ width: `${w}%` }}
        >
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-aura to-transparent [animation:marquee-x_1.8s_linear_infinite]" />
        </div>
      ))}
    </div>
  );
}
