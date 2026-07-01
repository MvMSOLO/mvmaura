import type { ComponentType } from "react";
import {
  ShimmerText,
  IonPulsar,
  MagneticButton,
  AuroraBg,
  GlowCursor,
  FadeSlide,
  TypewriterCode,
  MarqueeTags,
  OrbitLoader,
  GradientBorder,
  GlitchText,
  SkeletonWave,
} from "@/components/previews";

export const STACKS = [
  { id: "react", label: "React" },
  { id: "typescript", label: "TypeScript" },
  { id: "tailwind", label: "Tailwind" },
  { id: "html", label: "HTML / CSS" },
  { id: "vue", label: "Vue" },
  { id: "svelte", label: "Svelte" },
] as const;

export type StackId = (typeof STACKS)[number]["id"];

export const CATEGORIES = [
  "All",
  "Text",
  "Buttons",
  "Loaders",
  "Backgrounds",
  "Cursors",
  "Transitions",
] as const;
export type Category = (typeof CATEGORIES)[number];

export interface Snippet {
  id: string;
  stack: StackId;
  category: Exclude<Category, "All">;
  name: string;
  tag: string;
  Preview: ComponentType;
  code: string;
  dependencies?: string[];
}

const shimmerCss = `.shimmer{
  background: linear-gradient(90deg,#71717a 0%,#fafafa 50%,#71717a 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  color: transparent;
  animation: shimmer 4s linear infinite;
}
@keyframes shimmer { to { background-position: 200% center; } }`;

export const SNIPPETS: Snippet[] = [
  // ---------- React ----------
  {
    id: "react-shimmer",
    stack: "react",
    category: "Text",
    name: "Prism Reveal",
    tag: "text · shimmer",
    Preview: ShimmerText,
    code: `export function ShimmerText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent animate-[shimmer_4s_linear_infinite]"
      style={{
        backgroundImage:
          "linear-gradient(90deg,#71717a 0%,#fafafa 50%,#71717a 100%)",
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </span>
  );
}`,
  },
  {
    id: "react-magnetic",
    stack: "react",
    category: "Buttons",
    name: "Magnetic Aura",
    tag: "button · magnetic",
    Preview: MagneticButton,
    dependencies: ["framer-motion", "clsx"],
    code: `import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="px-6 py-3 rounded-full bg-amber-500 text-black font-medium"
    >
      {children}
    </motion.button>
  );
}`,
  },
  {
    id: "react-glowcursor",
    stack: "react",
    category: "Cursors",
    name: "Aura Cursor",
    tag: "cursor · follow",
    Preview: GlowCursor,
    code: `import { useRef, useState } from "react";

export function AuraCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 50, y: 50 });
  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-xl bg-neutral-900 h-64"
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setP({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
    >
      <div
        className="absolute size-56 rounded-full pointer-events-none blur-2xl"
        style={{
          left: p.x + "%",
          top: p.y + "%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle,#f59e0b 0%,transparent 60%)",
        }}
      />
    </div>
  );
}`,
  },
  {
    id: "react-fadeslide",
    stack: "react",
    category: "Transitions",
    name: "Fade Slide",
    tag: "transition · in",
    Preview: FadeSlide,
    dependencies: ["framer-motion"],
    code: `import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function FadeSlideCycle({ items }: { items: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 2400);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={i}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="inline-block text-3xl font-serif italic"
      >
        {items[i]}
      </motion.span>
    </AnimatePresence>
  );
}`,
  },
  {
    id: "react-orbit",
    stack: "react",
    category: "Loaders",
    name: "Orbit Loader",
    tag: "loader · orbit",
    Preview: OrbitLoader,
    code: `export function OrbitLoader() {
  return (
    <div className="relative size-16">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-0 animate-spin [animation-duration:3s]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-2 rounded-full bg-amber-500 shadow-[0_0_12px_#f59e0b]" />
      </div>
      <div className="absolute inset-2 animate-spin [animation-duration:1.6s] [animation-direction:reverse]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-white/70" />
      </div>
    </div>
  );
}`,
  },
  {
    id: "react-glitch",
    stack: "react",
    category: "Text",
    name: "Chroma Glitch",
    tag: "text · glitch",
    Preview: GlitchText,
    code: `export function ChromaGlitch({ children }: { children: string }) {
  return (
    <div className="relative inline-block font-serif italic text-4xl">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 text-amber-500 mix-blend-screen translate-x-[2px] animate-pulse">{children}</span>
      <span className="absolute inset-0 text-cyan-400 mix-blend-screen -translate-x-[2px] opacity-70">{children}</span>
    </div>
  );
}`,
  },

  // ---------- TypeScript ----------
  {
    id: "ts-typewriter",
    stack: "typescript",
    category: "Text",
    name: "Typewriter Hook",
    tag: "hook · typewriter",
    Preview: TypewriterCode,
    code: `import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 60): string {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    setOut("");
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}`,
  },
  {
    id: "ts-spring",
    stack: "typescript",
    category: "Transitions",
    name: "Spring Value",
    tag: "util · spring",
    Preview: FadeSlide,
    code: `export function spring(
  from: number,
  to: number,
  { stiffness = 170, damping = 26, mass = 1 } = {},
  onFrame: (v: number) => void,
): () => void {
  let v = from, velocity = 0, last = performance.now(), id = 0;
  const step = (t: number) => {
    const dt = Math.min((t - last) / 1000, 0.064);
    last = t;
    const force = -stiffness * (v - to);
    const damp = -damping * velocity;
    velocity += ((force + damp) / mass) * dt;
    v += velocity * dt;
    onFrame(v);
    if (Math.abs(velocity) > 0.01 || Math.abs(v - to) > 0.01)
      id = requestAnimationFrame(step);
  };
  id = requestAnimationFrame(step);
  return () => cancelAnimationFrame(id);
}`,
  },
  {
    id: "ts-marquee",
    stack: "typescript",
    category: "Backgrounds",
    name: "Marquee Row",
    tag: "component · marquee",
    Preview: MarqueeTags,
    code: `interface MarqueeProps { items: string[]; duration?: number; }

export function Marquee({ items, duration = 18 }: MarqueeProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-3 w-max" style={{ animation: \`marquee \${duration}s linear infinite\` }}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-neutral-800 text-xs font-mono">{t}</span>
        ))}
      </div>
      <style>{\`@keyframes marquee{to{transform:translateX(-50%)}}\`}</style>
    </div>
  );
}`,
  },

  // ---------- Tailwind ----------
  {
    id: "tw-gradient-border",
    stack: "tailwind",
    category: "Buttons",
    name: "Aura Border",
    tag: "border · conic",
    Preview: GradientBorder,
    code: `<div class="relative p-[1.5px] rounded-xl overflow-hidden">
  <div class="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,#f59e0b_25%,transparent_50%,#f59e0b_75%,transparent_100%)] animate-spin [animation-duration:4s]"></div>
  <div class="relative bg-neutral-950 rounded-[10px] px-5 py-3 font-mono text-sm text-white">
    aura::border
  </div>
</div>`,
  },
  {
    id: "tw-aurora",
    stack: "tailwind",
    category: "Backgrounds",
    name: "Aurora Field",
    tag: "bg · aurora",
    Preview: AuroraBg,
    code: `<div class="relative h-64 w-full overflow-hidden rounded-xl">
  <div class="absolute inset-0 blur-2xl opacity-60 bg-[conic-gradient(from_0deg_at_50%_50%,#f59e0b,#7c3aed_25%,#22d3ee_50%,#f59e0b_75%)] [animation:spin_14s_linear_infinite]"></div>
  <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
</div>`,
  },
  {
    id: "tw-skeleton",
    stack: "tailwind",
    category: "Loaders",
    name: "Wave Skeleton",
    tag: "loader · skeleton",
    Preview: SkeletonWave,
    code: `<div class="space-y-2 w-72">
  <div class="h-3 w-4/5 rounded-full overflow-hidden bg-neutral-800">
    <div class="h-full w-1/3 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-[shimmer_1.8s_linear_infinite]"></div>
  </div>
  <div class="h-3 w-3/5 rounded-full overflow-hidden bg-neutral-800">
    <div class="h-full w-1/3 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-[shimmer_1.8s_linear_infinite]"></div>
  </div>
</div>
<style>@keyframes shimmer{to{transform:translateX(300%)}}</style>`,
  },

  // ---------- HTML / CSS ----------
  {
    id: "html-shimmer",
    stack: "html",
    category: "Text",
    name: "CSS Shimmer",
    tag: "text · css-only",
    Preview: ShimmerText,
    code: `<span class="shimmer">aura reading</span>
<style>
${shimmerCss}
</style>`,
  },
  {
    id: "html-pulsar",
    stack: "html",
    category: "Loaders",
    name: "Ion Pulsar",
    tag: "loader · pulse",
    Preview: IonPulsar,
    code: `<div class="pulsar"></div>
<style>
.pulsar{
  position: relative;
  width: 56px; height: 56px;
  border-radius: 9999px;
  border: 2px solid #f59e0b;
  box-shadow: 0 0 30px -4px #f59e0b;
}
.pulsar::before{
  content:"";
  position:absolute; inset:0;
  border-radius: inherit;
  border: 1px solid rgba(245,158,11,.4);
  animation: ping 1.6s cubic-bezier(0,0,.2,1) infinite;
}
@keyframes ping { 75%,100% { transform: scale(1.8); opacity: 0; } }
</style>`,
  },
  {
    id: "html-cursor",
    stack: "html",
    category: "Cursors",
    name: "Aura Follow",
    tag: "cursor · js",
    Preview: GlowCursor,
    code: `<div id="stage" class="stage"><div id="glow"></div></div>
<style>
.stage{ position:relative; height: 240px; overflow:hidden; border-radius: 16px; background:#0a0a0b; }
#glow{
  position:absolute; width: 220px; height: 220px; border-radius: 9999px;
  background: radial-gradient(circle,#f59e0b 0%, transparent 60%);
  filter: blur(24px); pointer-events:none;
  transform: translate(-50%,-50%);
}
</style>
<script>
const s = document.getElementById("stage"), g = document.getElementById("glow");
s.addEventListener("mousemove", e => {
  const r = s.getBoundingClientRect();
  g.style.left = (e.clientX - r.left) + "px";
  g.style.top  = (e.clientY - r.top) + "px";
});
</script>`,
  },

  // ---------- Vue ----------
  {
    id: "vue-fade",
    stack: "vue",
    category: "Transitions",
    name: "Fade Slide",
    tag: "transition · vue",
    Preview: FadeSlide,
    code: `<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const items = ["fade.", "slide.", "reveal.", "aura."];
const i = ref(0);
let id: number;
onMounted(() => { id = window.setInterval(() => i.value = (i.value + 1) % items.length, 2400); });
onUnmounted(() => clearInterval(id));
</script>

<template>
  <Transition name="aura" mode="out-in">
    <span :key="i" class="text-3xl italic">{{ items[i] }}</span>
  </Transition>
</template>

<style scoped>
.aura-enter-from{ transform: translateY(20px); opacity: 0; }
.aura-leave-to{ transform: translateY(-20px); opacity: 0; }
.aura-enter-active,.aura-leave-active{ transition: all .4s ease; }
</style>`,
  },
  {
    id: "vue-magnetic",
    stack: "vue",
    category: "Buttons",
    name: "Magnetic Button",
    tag: "button · vue",
    Preview: MagneticButton,
    code: `<script setup lang="ts">
import { ref } from "vue";
const btn = ref<HTMLButtonElement>();
const tf = ref("translate(0,0)");
function move(e: MouseEvent) {
  const r = btn.value!.getBoundingClientRect();
  const x = e.clientX - (r.left + r.width / 2);
  const y = e.clientY - (r.top + r.height / 2);
  tf.value = \`translate(\${x * 0.3}px, \${y * 0.3}px)\`;
}
</script>

<template>
  <button ref="btn" :style="{ transform: tf }" @mousemove="move" @mouseleave="tf = 'translate(0,0)'"
    class="px-6 py-3 rounded-full bg-amber-500 text-black font-medium transition-transform duration-300">
    Aura →
  </button>
</template>`,
  },

  // ---------- Svelte ----------
  {
    id: "svelte-orbit",
    stack: "svelte",
    category: "Loaders",
    name: "Orbit Loader",
    tag: "loader · svelte",
    Preview: OrbitLoader,
    code: `<div class="orbit">
  <div class="ring one"><span /></div>
  <div class="ring two"><span /></div>
</div>

<style>
.orbit{ position:relative; width:64px; height:64px; }
.ring{ position:absolute; inset:0; animation: spin 3s linear infinite; }
.ring.two{ inset: 8px; animation-direction: reverse; animation-duration: 1.6s; }
.ring span{
  position:absolute; top:0; left:50%;
  width:8px; height:8px; border-radius:9999px;
  transform: translateX(-50%);
  background: #f59e0b; box-shadow: 0 0 12px #f59e0b;
}
.ring.two span{ width:6px; height:6px; background:#fff; box-shadow:none; }
@keyframes spin{ to { transform: rotate(360deg); } }
</style>`,
  },
  {
    id: "svelte-aurora",
    stack: "svelte",
    category: "Backgrounds",
    name: "Aurora Field",
    tag: "bg · aurora",
    Preview: AuroraBg,
    code: `<div class="aurora"></div>

<style>
.aurora{
  position: relative; height: 240px; border-radius: 16px; overflow:hidden;
  background: conic-gradient(from 0deg at 50% 50%, #f59e0b, #7c3aed 25%, #22d3ee 50%, #f59e0b 75%);
  filter: blur(28px); opacity: .7;
  animation: drift 14s linear infinite;
}
@keyframes drift { to { transform: rotate(360deg); } }
</style>`,
  },
  {
    id: "svelte-marquee",
    stack: "svelte",
    category: "Text",
    name: "Tag Marquee",
    tag: "marquee · svelte",
    Preview: MarqueeTags,
    code: `<script lang="ts">
  export let items: string[] = [];
  export let duration = 18;
</script>

<div class="wrap"><div class="row" style="animation-duration: {duration}s">
  {#each [...items, ...items] as t}<span>{t}</span>{/each}
</div></div>

<style>
.wrap{ overflow:hidden; width:100%; }
.row{ display:flex; gap:12px; width:max-content; animation: mx linear infinite; }
span{ padding: 4px 12px; border-radius: 9999px; background:#27272a; font: 500 12px/1 ui-monospace, monospace; color:#e4e4e7; }
@keyframes mx{ to { transform: translateX(-50%); } }
</style>`,
  },
];