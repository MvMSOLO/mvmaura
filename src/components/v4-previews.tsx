import React, { useEffect, useState, useRef, useMemo } from 'react';

// Batch V4 Unique Previews

export function DataFlowBg() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-xl">
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-aura animate-[marquee-x_4s_linear_infinite]"
            style={{
              top: `${i * 20}%`,
              width: '100%',
              opacity: 0.5,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-mono text-aura uppercase tracking-[0.4em]">Data_Stream_Active</span>
      </div>
    </div>
  );
}

export function GlassPortal() {
  return (
    <div className="perspective-[800px] w-full h-full flex items-center justify-center">
      <div className="size-24 bg-white/5 border border-white/10 rounded-full animate-[spin_8s_linear_infinite] preserve-3d">
        <div className="absolute inset-0 bg-aura opacity-10 blur-xl rounded-full" />
        <div className="absolute inset-4 border-t border-aura/40 rounded-full" />
      </div>
    </div>
  );
}

export function ElasticBento() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1 w-40 h-24 group">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-surface-2 border border-white/5 rounded-sm transition-all duration-500 group-hover:scale-[0.9] hover:!scale-110 hover:bg-aura/20 hover:z-10"
        />
      ))}
    </div>
  );
}

export function SlitScanHero() {
  return (
    <div className="relative h-12 overflow-hidden bg-black px-4 flex items-center">
      <div className="text-4xl font-black italic tracking-tighter text-white/10">AURA</div>
      <div className="absolute inset-y-0 left-0 w-1/2 bg-aura animate-[slit-sweep_4s_ease-in-out_infinite] mix-blend-difference" />
      <style>{`
        @keyframes slit-sweep {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

export function AuraCircuit() {
  return (
    <div className="w-full h-full bg-zinc-950 relative overflow-hidden">
      <svg className="size-full opacity-30">
        <path
          d="M 0 50 H 50 V 100 M 50 50 H 150 V 20 M 150 20 H 200"
          fill="none"
          stroke="var(--aura)"
          strokeWidth="1"
          strokeDasharray="200"
          strokeDashoffset="200"
          className="animate-[border-draw_3s_linear_infinite]"
        />
        <circle cx="50" cy="50" r="2" fill="var(--aura)" />
        <circle cx="150" cy="20" r="2" fill="var(--aura)" />
      </svg>
    </div>
  );
}

export function LiquidTab() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex bg-surface-2 p-1 rounded-full relative overflow-hidden">
      {[0, 1, 2].map(i => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className="relative z-10 px-4 py-1 text-[10px] font-bold uppercase transition-colors"
          style={{ color: active === i ? 'black' : 'rgba(255,255,255,0.4)' }}
        >
          Tab {i + 1}
        </button>
      ))}
      <div
        className="absolute inset-y-1 bg-aura rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          left: `${4 + active * 54}px`,
          width: '50px',
        }}
      />
    </div>
  );
}

export function MagneticLink() {
  return (
    <a href="#" className="group relative text-2xl font-display italic">
      <span className="relative z-10 group-hover:text-aura transition-colors">Hover Me</span>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-aura transition-all duration-300 group-hover:w-full" />
      <div className="absolute -inset-2 bg-aura/0 group-hover:bg-aura/5 rounded-lg transition-colors scale-75 group-hover:scale-100" />
    </a>
  );
}

export function CyberStencilV2() {
  return (
    <div className="bg-white flex items-center justify-center p-4 rounded-lg overflow-hidden">
      <h2 className="text-5xl font-black italic tracking-tighter mix-blend-multiply bg-black text-white px-2">V4.0</h2>
      <div className="absolute inset-0 bg-aura opacity-20 animate-pulse pointer-events-none" />
    </div>
  );
}

export function ParticleWave() {
  return (
    <div className="flex gap-1 items-end h-16">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-aura/40 rounded-full animate-[float-y_1.5s_infinite_ease-in-out]"
          style={{
            height: `${20 + Math.sin(i * 0.5) * 30}px`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

export function GlitchCard() {
  return (
    <div className="relative w-40 h-24 bg-surface-2 border border-white/10 rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-red-500/10 -translate-x-full group-hover:translate-x-full transition-transform duration-[0.1s] ease-linear" />
      <div className="absolute inset-0 bg-cyan-500/10 translate-x-full group-hover:-translate-x-full transition-transform duration-[0.1s] ease-linear" />
      <div className="flex items-center justify-center h-full font-mono text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">
        ERR_SIGNAL_V4
      </div>
    </div>
  );
}

export function AuraMasterpieceV2() {
    return (
        <div className="relative size-full bg-black flex items-center justify-center rounded-xl overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--aura)_0%,transparent_70%)] animate-pulse" />
            <svg viewBox="0 0 200 200" className="size-32 animate-[spin_20s_linear_infinite]">
                <defs>
                    <linearGradient id="g-v2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--aura)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                {[...Array(8)].map((_, i) => (
                    <circle
                        key={i}
                        cx="100" cy="100" r={20 + i * 10}
                        fill="none"
                        stroke="url(#g-v2)"
                        strokeWidth="0.5"
                        strokeDasharray={`${10 + i * 5} ${20}`}
                        style={{ transform: `rotate(${i * 45}deg)`, transformOrigin: 'center' }}
                    />
                ))}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-display italic text-aura/60 text-xs">Aura Pack</div>
        </div>
    );
}

export function HardEdgeFloating() {
    return (
        <div className="relative size-20 bg-zinc-900 border border-white/20 [transform:rotateX(45deg)_rotateY(-15deg)] animate-[hard-float_4s_steps(4)_infinite]">
            <div className="absolute inset-0 bg-aura/20 backdrop-blur-sm" />
            <div className="absolute -top-4 -right-4 size-8 bg-aura border border-aura animate-pulse" />
            <style>{`
                @keyframes hard-float {
                    0%, 100% { transform: rotateX(45deg) rotateY(-15deg) translateY(0); }
                    50% { transform: rotateX(45deg) rotateY(-15deg) translateY(-20px); }
                }
            `}</style>
        </div>
    );
}

export function NeonGrid() {
    return (
        <div className="w-full h-full bg-black relative overflow-hidden p-2 grid grid-cols-8 gap-1 opacity-40">
            {[...Array(32)].map((_, i) => (
                <div key={i} className="h-4 bg-aura/5 border border-aura/20 animate-pulse" style={{ animationDelay: `${i * 0.05}s` }} />
            ))}
        </div>
    );
}

export function ShimmerBorderButton() {
    return (
        <button className="relative px-8 py-3 bg-zinc-950 rounded-full group overflow-hidden border border-white/5">
            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#000_40%,var(--aura)_50%,#000_60%,#000_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-xs font-mono uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Orbit</span>
        </button>
    );
}

export function KineticVariableStretch() {
    return (
        <div className="flex gap-1 group">
            {"STRETCH".split('').map((c, i) => (
                <span key={i} className="text-4xl font-black italic text-white transition-all duration-500 group-hover:scale-y-[2] group-hover:text-aura">{c}</span>
            ))}
        </div>
    );
}

export function ProceduralNoiseLoader() {
    return (
        <div className="relative size-16 bg-zinc-900 rounded-lg overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 animate-[noise-grain_0.2s_steps(2)_infinite]" />
            <div className="absolute inset-2 border-2 border-aura rounded-sm animate-spin [animation-duration:2s]" />
        </div>
    );
}

export function HolographicBadge() {
    return (
        <div className="px-4 py-1 bg-white/5 border border-white/10 rounded-full relative group overflow-hidden">
            <span className="text-[10px] font-mono text-white/60 group-hover:text-white transition-colors uppercase">Authorized</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-aura to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
    );
}

export function AuraRadialReveal() {
    return (
        <div className="relative size-32 rounded-full overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="absolute inset-0 bg-aura opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-0 [clip-path:circle(0%_at_center)] group-hover:[clip-path:circle(100%_at_center)] transition-all duration-700 bg-[radial-gradient(circle_at_center,var(--aura)_0%,transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-white/20 uppercase tracking-[2em]">Core</div>
        </div>
    );
}

export function MagneticSocialDock() {
    return (
        <div className="flex gap-2 p-2 bg-surface rounded-2xl border border-white/5">
            {[1, 2, 3].map(i => (
                <div key={i} className="size-10 bg-surface-2 rounded-xl flex items-center justify-center hover:scale-125 transition-transform hover:bg-aura hover:text-black cursor-pointer">
                    <div className="size-4 border-2 border-current rounded-sm" />
                </div>
            ))}
        </div>
    );
}
