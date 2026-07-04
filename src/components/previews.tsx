import React, { useState, useEffect, useRef, useMemo } from "react";

export function ShimmerText() {
  return <div className="text-3xl font-mono uppercase tracking-tight text-aura">aura reading</div>;
}

export function ElasticText() {
  return (
    <div className="flex gap-2 text-3xl font-mono uppercase">
      {"BOUNCE".split("").map((c, i) => (
        <span
          key={i}
          className="hover:animate-[elastic-char_0.5s_ease-out]"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {c}
        </span>
      ))}
      <style>{`@keyframes elastic-char { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.5) scaleX(0.8); color: var(--aura); } }`}</style>
    </div>
  );
}

export function WaveText() {
  return (
    <div className="flex gap-0.5">
      {"WAVING".split("").map((c, i) => (
        <span
          key={i}
          className="text-2xl font-mono uppercase animate-[text-wave_2s_infinite_ease-in-out]"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {c}
        </span>
      ))}
      <style>{`@keyframes text-wave { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); color: var(--aura); } }`}</style>
    </div>
  );
}

export function PixelText() {
  return (
    <div className="flex gap-1">
      {"PIXELS".split("").map((c, i) => (
        <span
          key={i}
          className="font-mono text-2xl text-aura animate-[pixel-fade_2s_infinite]"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          {c}
        </span>
      ))}
      <style>{`@keyframes pixel-fade { 0%, 100% { opacity: 0.2; filter: blur(2px); } 50% { opacity: 1; filter: blur(0px); } }`}</style>
    </div>
  );
}

export function LiquidText() {
  return (
    <div className="relative text-4xl font-mono uppercase tracking-widest text-aura overflow-hidden group">
      <span className="relative z-10">LIQUID</span>
      <div className="absolute inset-0 bg-aura/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <svg viewBox="0 0 100 20" className="w-full animate-[liquid-wave_3s_infinite_linear]">
          <path d="M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z" fill="var(--aura)" />
        </svg>
      </div>
      <style>{`@keyframes liquid-wave { from { transform: translateX(-100%); } to { transform: translateX(100%); } }`}</style>
    </div>
  );
}

export function MagneticText() {
  return (
    <div className="relative cursor-pointer py-4 group">
      <span className="block text-3xl font-mono uppercase group-hover:text-aura transition-colors">
        Pull <span className="text-aura group-hover:text-white">Closer</span>
      </span>
    </div>
  );
}

export function HolographicText() {
  return (
    <div className="relative group cursor-default">
      <h2 className="text-4xl font-mono uppercase tracking-widest relative">
        <span className="absolute inset-0 text-white [2px] opacity-20 group-hover:opacity-40 transition-opacity">
          HOLOGRAPH
        </span>
        <span
          className="bg-clip-text text-transparent animate-[hologram_5s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
            backgroundSize: "400% 100%",
          }}
        >
          HOLOGRAPH
        </span>
      </h2>
      <style>{`@keyframes hologram { 0% { background-position: 0% 50%; filter: hue-rotate(0deg); } 100% { background-position: 400% 50%; filter: hue-rotate(360deg); } }`}</style>
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

export function GlitchTextMedium() {
  return (
    <div className="relative font-display text-4xl italic group overflow-hidden px-4">
      <span className="block group-hover:translate-x-1 transition-transform">GLITCH</span>
      <div className="absolute inset-0 bg-red-500/20 mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
      <div
        className="absolute inset-0 bg-blue-500/20 mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:animate-pulse"
        style={{ animationDelay: "0.2s" }}
      />
    </div>
  );
}

export function TypewriterCode() {
  return (
    <div className="font-mono text-sm text-aura">
      {"> const aura = new Motion()"}
      <span className="inline-block w-1.5 h-4 bg-aura ml-0.5 align-middle animate-pulse" />
    </div>
  );
}

export function FadeSlide() {
  return (
    <div className="text-2xl font-mono uppercase animate-[slide-up-in_0.6s_ease-out] text-foreground">
      reveal.aura.
      <style>{`@keyframes slide-up-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}

export function ScanText() {
  return (
    <div className="relative">
      <span className="text-4xl font-mono uppercase text-white/10">MISSION</span>
      <div className="absolute inset-0 overflow-hidden animate-[scan-reveal_3s_infinite]">
        <span className="text-4xl font-mono uppercase text-aura">MISSION</span>
      </div>
      <style>{`@keyframes scan-reveal { 0%, 100% { width: 0; } 50% { width: 100%; } }`}</style>
    </div>
  );
}

export function AuraTextFloat() {
  return (
    <div className="text-2xl font-mono uppercase animate-[aura-float_4s_infinite_ease-in-out] text-aura">
      Floating Aura
      <style>{`@keyframes aura-float { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-10px) rotate(1deg); } }`}</style>
    </div>
  );
}

export function RainbowText() {
  return (
    <div className="text-3xl font-mono uppercase bg-gradient-to-r from-red-500 via-aura to-blue-500 bg-clip-text text-transparent animate-[marquee-x_5s_linear_infinite] bg-[length:200%_auto]">
      Vibrant Motion
      <style>{`@keyframes marquee-x { from { background-position: 0% 50%; } to { background-position: 200% 50%; } }`}</style>
    </div>
  );
}

export function SplitTextReveal() {
  return (
    <div className="flex overflow-hidden text-3xl font-mono uppercase gap-2">
      <span className="animate-[slide-up-in_0.5s_ease-out_forwards]">SPLIT</span>
      <span className="animate-[slide-up-in_0.5s_ease-out_0.2s_forwards] opacity-0">REVEAL</span>
    </div>
  );
}

export function MagneticAuraButton() {
  return (
    <button className="relative px-8 py-3 bg-surface-2 border border-white/10 rounded-none group overflow-hidden">
      <div className="absolute inset-0 bg-aura opacity-0 group-hover:opacity-20  transition-opacity duration-500" />
      <span className="relative z-10 transition-colors group-hover:text-white">Explore Aura</span>
    </button>
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
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-aura to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  );
}

export function WaveButton() {
  return (
    <button className="relative px-8 py-3 bg-aura text-black font-semibold rounded-none overflow-hidden group">
      <span className="relative z-10">WAVE</span>
      <div className="absolute bottom-0 left-0 w-full h-0 bg-black/20 group-hover:h-full transition-all duration-300" />
    </button>
  );
}

export function GlowButton() {
  return (
    <button className="relative px-6 py-2 bg-background border border-white/10 rounded-none group overflow-hidden">
      <div className="absolute inset-0 bg-aura opacity-0 group-hover:opacity-20  transition-opacity" />
      <div className="absolute -inset-[500%] group-hover:animate-[glow-spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,var(--aura),transparent)] opacity-0 group-hover:opacity-100" />
      <span className="relative z-10 font-medium group-hover:text-white transition-colors">
        Surge
      </span>
      <style>{`@keyframes glow-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </button>
  );
}

export function LiquidBlobButton() {
  return (
    <button className="relative px-8 py-3 rounded-none bg-surface-2 text-foreground font-semibold overflow-hidden group transition-transform active:scale-95">
      <span className="relative z-10">Liquid Aura</span>
      <div className="absolute inset-0 bg-aura/20 opacity-0 group-hover:opacity-100  transition-opacity" />
    </button>
  );
}

export function MagneticButton() {
  return (
    <button className="px-6 py-2.5 rounded-none bg-aura text-black font-medium text-sm  hover:scale-110 transition-transform">
      Aura →
    </button>
  );
}

export function LiquidButton() {
  return (
    <button className="relative px-8 py-3 bg-surface-2 rounded-none border border-white/10 overflow-hidden group">
      <span className="relative z-10 text-sm font-medium transition-colors group-hover:text-background">
        Press Start
      </span>
      <div className="absolute inset-0 bg-aura translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
    </button>
  );
}

export function NeumorphicBtn() {
  return (
    <button className="px-6 py-2 bg-surface rounded-none  active:shadow-inner transition-all text-sm font-medium text-text-muted hover:text-aura">
      Aura Style
    </button>
  );
}

export function ShinobiButton() {
  return (
    <button className="relative px-6 py-2 bg-neutral-900 border border-white/5 rounded-none group">
      <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-aura/10" />
      <span className="relative z-10 font-mono text-xs text-aura">SHINOBI_EXEC</span>
    </button>
  );
}

export function AuraRadialMenu() {
  return (
    <div className="relative size-12 flex items-center justify-center">
      <button className="z-10 size-10 rounded-none bg-aura  flex items-center justify-center transition-transform active:scale-90" />
      <div className="absolute size-4 bg-aura rounded-none animate-ping opacity-20" />
    </div>
  );
}

export function GlassButton() {
  return (
    <button className="px-6 py-2 bg-white/5 backdrop- border border-white/10 rounded-none hover:bg-white/10 transition-all text-sm font-light tracking-widest">
      TRANSLUCENT
    </button>
  );
}

export function CyberToggle() {
  return (
    <div className="relative w-14 h-7 rounded-none bg-surface-2 border border-white/10 p-1 group cursor-pointer">
      <div className="size-5 rounded-none bg-white/20 group-hover:bg-aura transition-all translate-x-0" />
    </div>
  );
}

export function ElasticToggle() {
  return (
    <div className="relative w-14 h-7 rounded-none bg-aura/20 border border-white/10 p-1 cursor-pointer">
      <div className="size-5 rounded-none bg-white shadow-xl translate-x-7 transition-all duration-500" />
    </div>
  );
}

export function CyberSwitch() {
  return (
    <div className="w-12 h-6 bg-black border border-aura/40 rounded-none flex items-center px-1">
      <div className="size-4 bg-aura animate-pulse" />
    </div>
  );
}

export function DoubleGlowBtn() {
  return (
    <button className="relative px-8 py-3 bg-neutral-950 rounded-none border border-aura/20  hover: transition-all">
      Dual Surge
    </button>
  );
}

export function LiquidLoader() {
  return (
    <div className="size-16 relative overflow-hidden rounded-none border-2 border-aura/30 flex items-end">
      <div
        className="w-full bg-aura animate-[liquid-fill_4s_infinite_linear]"
        style={{ height: "60%" }}
      />
      <style>{`@keyframes liquid-fill { 0% { height: 0%; filter: hue-rotate(0deg); } 50% { height: 100%; filter: hue-rotate(90deg); } 100% { height: 0%; filter: hue-rotate(0deg); } }`}</style>
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
          style={{ animationDelay: `${i * 0.15}s`, filter: `hue-rotate(${i * 45}deg)` }}
        />
      ))}
      <style>{`@keyframes prism-grow { 0%, 100% { height: 20%; opacity: 0.3; } 50% { height: 100%; opacity: 1; } }`}</style>
    </div>
  );
}

export function AuraSpinner() {
  return (
    <div className="size-12 border-4 border-aura/20 border-t-aura rounded-none animate-spin" />
  );
}

export function GooeyLoader() {
  return (
    <div className="relative size-16 flex items-center justify-center gap-4">
      <div className="size-6 rounded-none bg-aura animate-bounce" />
      <div
        className="size-6 rounded-none bg-aura animate-bounce"
        style={{ animationDelay: "0.2s" }}
      />
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
          r="40"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="60 180"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function OrbitLoader() {
  return (
    <div className="relative size-16">
      <div className="absolute inset-0 rounded-none border border-white/10" />
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-2 rounded-none bg-aura " />
      </div>
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

export function DNAHelixLoader() {
  return (
    <div className="flex gap-1 h-12 items-center">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between h-full items-center animate-[dna-rotate_2s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <div className="size-1.5 rounded-none bg-aura" />
          <div className="size-1.5 rounded-none bg-white/40" />
        </div>
      ))}
      <style>{`@keyframes dna-rotate { 0%, 100% { transform: scaleY(1); opacity: 0.3; } 50% { transform: scaleY(0.2); opacity: 1; } }`}</style>
    </div>
  );
}

export function WaveLoading() {
  return (
    <div className="flex gap-1.5 h-6 items-center">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 bg-aura rounded-none animate-[wave-grow_1s_infinite_ease-in-out]"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      <style>{`@keyframes wave-grow { 0%, 100% { height: 40%; opacity: 0.3; } 50% { height: 100%; opacity: 1; } }`}</style>
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
          <div className="size-1.5 bg-aura rounded-none absolute top-0 left-1/2 -translate-x-1/2" />
        </div>
      ))}
    </div>
  );
}

export function SpinRing() {
  return (
    <div className="relative size-16">
      <div className="absolute inset-0 border-2 border-white/5 rounded-none" />
      <div className="absolute inset-0 border-2 border-t-aura rounded-none animate-spin" />
    </div>
  );
}

export function PulseDots() {
  return (
    <div className="flex gap-2">
      <div className="size-2 bg-aura rounded-none animate-pulse" />
      <div className="size-2 bg-aura rounded-none animate-pulse [animation-delay:0.2s]" />
      <div className="size-2 bg-aura rounded-none animate-pulse [animation-delay:0.4s]" />
    </div>
  );
}

export function InfiniteTiles() {
  return (
    <div className="w-full h-1 bg-white/10 relative overflow-hidden rounded-none">
      <div
        className="absolute inset-0 bg-aura animate-[scroll-x_2s_linear_infinite]"
        style={{ width: "50%" }}
      />
      <style>{`@keyframes scroll-x { from { transform: translateX(-100%); } to { transform: translateX(200%); } }`}</style>
    </div>
  );
}

export function SkeletonWave() {
  return (
    <div className="w-40 space-y-2">
      <div className="h-3 bg-white/5 rounded-none animate-pulse" />
      <div className="h-3 bg-white/5 rounded-none animate-pulse w-2/3" />
    </div>
  );
}

export function BarChartLoader() {
  return (
    <div className="flex items-end gap-1 h-8">
      {[40, 70, 90, 60, 80].map((h, i) => (
        <div
          key={i}
          className="w-2 bg-aura/40 rounded-none-t animate-[bar-grow_1.5s_infinite_ease-in-out]"
          style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
        />
      ))}
      <style>{`@keyframes bar-grow { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.5); } }`}</style>
    </div>
  );
}

export function FloatingIsland() {
  return (
    <div className="relative w-40 h-24 bg-gradient-to-b from-surface-2 to-background rounded-none border border-white/10 shadow-2xl animate-bounce">
      <div className="absolute top-4 left-4 size-6 rounded-none bg-aura/40 border border-aura/60" />
    </div>
  );
}

export function Floating3DCard() {
  return (
    <div className="size-32 bg-gradient-to-br from-aura/20 to-surface-2 border border-white/10 rounded-none hover:rotate-12 transition-transform" />
  );
}

export function BentoHover() {
  return (
    <div className="relative w-40 h-28 bg-surface-2 rounded-none border border-white/5 p-4 overflow-hidden group">
      <div className="absolute inset-0 bg-aura opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      <div className="relative z-10 size-8 bg-background rounded-none border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="size-2 bg-aura rounded-none" />
      </div>
    </div>
  );
}

export function InteractiveGridDots() {
  return (
    <div className="grid grid-cols-6 gap-2 p-4">
      {Array.from({ length: 36 }).map((_, i) => (
        <div
          key={i}
          className="size-1.5 rounded-none bg-white/10 hover:bg-aura hover:scale-150 transition-all duration-300"
        />
      ))}
    </div>
  );
}

export function SpotlightCard() {
  return (
    <div className="relative w-48 h-28 bg-surface-2 rounded-none border border-white/5 overflow-hidden group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),var(--aura-soft)_0%,transparent_60%)]" />
      <div className="p-4 relative z-10">
        <div className="size-6 bg-white/10 rounded-none" />
      </div>
    </div>
  );
}

export function BentoGridItem() {
  return (
    <div className="relative w-48 h-32 bg-surface-2 rounded-none border border-white/5 p-4 overflow-hidden group hover:border-aura/30 transition-colors">
      <div className="absolute top-2 right-2 size-2 bg-aura rounded-none animate-ping" />
      <div className="h-full flex flex-col justify-end">
        <div className="h-1.5 w-12 bg-aura/40 rounded-none mb-2" />
      </div>
    </div>
  );
}

export function FloatingDock() {
  return (
    <div className="flex items-end gap-2 bg-white/5 backdrop- p-2 rounded-none border border-white/10 h-16">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="size-8 bg-surface-2 rounded-none border border-white/5 hover:bg-aura hover:size-10 transition-all duration-300"
        />
      ))}
    </div>
  );
}

export function MagneticGrid() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-none grid grid-cols-10 grid-rows-6 gap-2 p-2">
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} className="size-1 bg-white/20 rounded-none hover:bg-aura transition-all" />
      ))}
    </div>
  );
}

export function GridPulse() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="size-10 bg-white/5 rounded-none animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export function GridHover() {
  return (
    <div className="grid grid-cols-4 gap-1 p-1 bg-surface-2 rounded-none">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="size-8 rounded-none bg-background/40 hover:bg-aura transition-colors"
        />
      ))}
    </div>
  );
}

export function BentoPulse() {
  return (
    <div className="grid grid-cols-3 gap-2 w-40 h-24">
      <div className="col-span-2 bg-surface-2 rounded-none animate-pulse" />
      <div className="bg-aura/10 rounded-none" />
    </div>
  );
}

export function GlassMorphismCard() {
  return (
    <div className="w-48 h-28 rounded-none border border-white/10 bg-white/5 backdrop- flex items-center justify-center">
      <div className="size-10 rounded-none bg-aura/20 " />
    </div>
  );
}

export function HolographicCard() {
  return (
    <div className="w-40 h-24 rounded-none bg-surface-2 border border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-aura/10 via-transparent to-cyan-500/10" />
    </div>
  );
}

export function RefractiveGlass() {
  return (
    <div className="w-48 h-28 bg-white/5 backdrop- rounded-none border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
    </div>
  );
}

export function TiltCard3D() {
  return (
    <div className="w-48 h-32 rounded-none bg-surface-2 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
      <span className="text-xs font-mono text-aura">3D::ELEVATE</span>
    </div>
  );
}

export function AuraStarfield() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-0.5 bg-white rounded-none animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

export function WarpDriveBg() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/30 rounded-none animate-[warp_1s_linear_infinite]"
          style={{ left: `${Math.random() * 100}%`, top: "0%", width: "1px", height: "20px" }}
        />
      ))}
      <style>{`@keyframes warp { to { transform: translateY(300px); opacity: 0; } }`}</style>
    </div>
  );
}

export function RetroGrid() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden rounded-none perspective-[200px]">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[length:20px_20px]"
        style={{ transform: "rotateX(60deg) translateY(-20px)", transformOrigin: "top" }}
      />
    </div>
  );
}

export function NoiseBg() {
  return <div className="w-full h-full bg-neutral-900 noise-overlay opacity-20 rounded-none" />;
}

export function AuraGrid() {
  return (
    <div className="grid grid-cols-4 gap-1 p-1 w-full h-full">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="bg-surface-2 rounded-none-sm opacity-20 animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export function AuroraBg() {
  return (
    <div
      className="w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,#f59e0b_0%,#7c3aed_20%,#22d3ee_45%,#f59e0b_70%)] opacity-30  rounded-none animate-spin"
      style={{ animationDuration: "20s" }}
    />
  );
}

export function ParticleField() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-1 bg-aura/20 rounded-none animate-ping"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
}

export function CyberRain() {
  return (
    <div className="relative w-full h-full bg-black/40 overflow-hidden rounded-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 w-px h-10 bg-aura animate-[rain_2s_linear_infinite]"
          style={{ left: `${i * 10}%`, animationDelay: `${Math.random() * 2}s` }}
        />
      ))}
      <style>{`@keyframes rain { from { transform: translateY(-100%); } to { transform: translateY(200px); } }`}</style>
    </div>
  );
}

export function FloatingParticles() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-1 bg-aura rounded-none animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

export function NeonTunnel() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
      <div className="size-20 border border-aura/20 rounded-none animate-ping" />
      <div className="absolute size-10 border border-aura/40 rounded-none animate-ping [animation-delay:0.5s]" />
    </div>
  );
}

export function MatrixRain() {
  return (
    <div className="w-full h-full bg-black font-mono text-[8px] text-aura/40 p-2 overflow-hidden leading-tight">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          010110101100101
        </div>
      ))}
    </div>
  );
}

export function FoggyAura() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-aura/10 via-background to-transparent  rounded-none" />
  );
}

export function CosmicDust() {
  return (
    <div className="relative w-full h-full bg-[#050505] rounded-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-[1px] bg-aura/30"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
}

export function VortexBg() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black rounded-none overflow-hidden">
      <div className="size-40 bg-[conic-gradient(var(--aura),transparent,var(--aura))] opacity-20 animate-spin" />
    </div>
  );
}

export function NebulaDrift() {
  return (
    <div className="w-full h-full bg-neutral-950 relative overflow-hidden rounded-none">
      <div className="absolute inset-0 bg-aura/5  animate-pulse" />
    </div>
  );
}

export function CosmicResonance() {
  return (
    <div className="relative size-full bg-black flex items-center justify-center overflow-hidden rounded-none">
      <svg viewBox="0 0 400 400" className="size-full">
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="var(--aura)"
          strokeWidth="0.5"
          strokeDasharray="5 5"
          className="animate-spin"
          style={{ animationDuration: "10s" }}
        />
        {Array.from({ length: 50 }).map((_, i) => (
          <circle
            key={i}
            cx={200 + Math.cos(i) * 80}
            cy={200 + Math.sin(i) * 80}
            r="1"
            fill="white"
            opacity="0.3"
          />
        ))}
      </svg>
    </div>
  );
}

export function AuraMasterpiece() {
  return (
    <div className="relative size-full bg-[#030303] flex items-center justify-center overflow-hidden rounded-none group">
      <div className="absolute inset-0 aura-radial opacity-10 group-hover:opacity-20 transition-opacity" />
      <svg viewBox="0 0 600 600" className="size-full max-w-[500px]">
        {Array.from({ length: 100 }).map((_, i) => (
          <circle
            key={i}
            cx={300 + Math.cos(i * 0.1) * 200}
            cy={300 + Math.sin(i * 0.1) * 200}
            r="0.5"
            fill="var(--aura)"
            opacity="0.2"
          />
        ))}
      </svg>
    </div>
  );
}

export function CyberScan() {
  return (
    <div className="relative w-48 h-28 bg-surface-2 rounded-none overflow-hidden border border-white/5">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-aura  animate-[scan_3s_infinite_linear]" />
      <style>{`@keyframes scan { 0% { top: 0%; } 100% { top: 100%; } }`}</style>
    </div>
  );
}

export function FloatingSphere() {
  return (
    <div className="size-20 rounded-none bg-gradient-to-br from-aura/40 to-transparent relative animate-bounce">
      <div className="absolute inset-0 bg-aura opacity-20 " />
    </div>
  );
}

export function ParticleCircle() {
  return (
    <div className="relative size-24 flex items-center justify-center">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-1.5 bg-aura rounded-none"
          style={{ transform: `rotate(${i * 30}deg) translateY(-40px)` }}
        />
      ))}
    </div>
  );
}

export function AuraRing() {
  return (
    <div className="size-20 border-2 border-aura/30 border-t-aura rounded-none animate-spin" />
  );
}

export function HologramAvatar() {
  return (
    <div className="size-20 rounded-none bg-aura/20 border-2 border-aura/40 animate-pulse flex items-center justify-center font-mono text-aura text-[10px]">
      AUTH
    </div>
  );
}

export function InteractiveDNA() {
  return (
    <div className="flex gap-2 rotate-45">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-10 w-px bg-white/10 relative">
          <div className="absolute top-0 -left-1 size-2 bg-aura rounded-none" />
        </div>
      ))}
    </div>
  );
}

export function GlitchLogo() {
  return (
    <div className="text-5xl font-mono uppercase text-white relative">
      MVM
      <span className="absolute inset-0 text-aura mix-blend-screen animate-pulse translate-x-1">
        MVM
      </span>
    </div>
  );
}

export function FloatingIslandSmall() {
  return (
    <div className="w-20 h-4 bg-surface-2 rounded-none border border-white/10 animate-bounce" />
  );
}

export function IonPulsar() {
  return <div className="size-14 rounded-none border-2 border-aura  animate-ping" />;
}

export function AuraBlob() {
  return <div className="size-24 bg-aura/30  rounded-none animate-pulse" />;
}

export function MagneticTrailLink() {
  return (
    <div className="text-xl font-mono uppercase text-aura underline underline-offset-8">
      Trace Motion
    </div>
  );
}

export function MorphingShape() {
  return (
    <>
      <div className="size-20 bg-aura animate-[morph_5s_infinite_ease-in-out]" />
      <style>{`@keyframes morph { 0%, 100% { border-radius: 60% 40% 30% 70%; } 50% { border-radius: 30% 60% 70% 40%; } }`}</style>
    </>
  );
}

export function AuraInfinity() {
  return (
    <div className="relative size-20">
      <div className="absolute inset-0 border-2 border-aura rounded-none rotate-45" />
      <div className="absolute inset-0 border-2 border-aura/30 rounded-none -rotate-45" />
    </div>
  );
}

export function PageSlide() {
  return <div className="w-full h-full bg-aura/20 animate-[slide_2s_infinite]" />;
}

export function CircularMask() {
  return <div className="size-20 bg-aura rounded-none animate-ping" />;
}

export function PixelDissolve() {
  return (
    <div className="grid grid-cols-4 gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="size-4 bg-aura/40 animate-pulse" />
      ))}
    </div>
  );
}

export function AuraBlurFade() {
  return <div className="w-full h-full bg-aura/10  animate-pulse" />;
}

export function StaggerReveal() {
  return (
    <div className="flex gap-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="size-6 bg-aura animate-bounce" />
      ))}
    </div>
  );
}

export function GlitchExit() {
  return <div className="w-full h-1 bg-aura animate-pulse" />;
}

export function GlowCursor() {
  return <div className="size-10 rounded-none bg-aura/40 " />;
}

export function TrailingCursor() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <div key={i} className="size-2 bg-aura rounded-none opacity-40" />
      ))}
    </div>
  );
}

export function InvertedCursor() {
  return <div className="size-8 border border-white rounded-none" />;
}

export function MagneticCursor() {
  return <div className="size-10 border-2 border-aura rounded-none animate-pulse" />;
}

export function FluidCursor() {
  return <div className="size-12 bg-aura/20 rounded-none " />;
}

export function StructuralRefraction() {
  return (
    <div className="relative size-full flex items-center justify-center p-8 bg-black">
      <div className="absolute inset-0 border border-white/5" />
      <div className="relative size-32 border border-aura group-hover:rotate-45 transition-transform duration-700">
        <div className="absolute inset-0 border border-aura/20 -translate-x-2 -translate-y-2" />
        <div className="absolute inset-0 border border-aura/20 translate-x-2 translate-y-2" />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-aura">
          REFRACT_01
        </div>
      </div>
    </div>
  );
}

export function MechanicalCommand() {
  return (
    <div className="w-full space-y-2 font-mono text-[10px]">
      <div className="flex justify-between border-b border-white/5 pb-1">
        <span className="text-white/40">SYS_EXEC</span>
        <span className="text-aura">READY</span>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-4 bg-white/5 group-hover:bg-aura/20 transition-colors" />
        ))}
      </div>
      <div className="text-white/20">PROCESS_ID: 0x88A2</div>
    </div>
  );
}

export function DataStreamAura() {
  return (
    <div className="relative size-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 flex flex-col gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="whitespace-nowrap text-[6px] text-aura animate-[marquee-x_10s_linear_infinite]"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            101010111010100101010101110101001010101011101010010101010111010100
          </div>
        ))}
      </div>
      <div className="z-10 font-mono font-black text-2xl tracking-tighter text-white">
        DATA_STREAM
      </div>
    </div>
  );
}

export function TerminalCursor() {
  return (
    <div className="p-4 border border-line bg-surface/40 font-mono text-[10px] flex items-center gap-2 group">
      <span className="text-aura">$</span>
      <span className="text-white/80 uppercase">Aura_Protocol_Init</span>
      <div className="w-2 h-4 bg-aura animate-pulse" />
    </div>
  );
}
