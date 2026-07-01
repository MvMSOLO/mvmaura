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
