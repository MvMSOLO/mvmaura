import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { toast } from "sonner";
import { Check, Copy, Terminal, X } from "lucide-react";
import { STACKS, CATEGORIES, SNIPPETS, type StackId, type Category } from "@/data/snippets";
import { Cutscene } from "@/components/cutscene";

export const Route = createFileRoute("/")({
  component: Index,
});

function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest("button, a"));
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHover);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 size-6 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{
        x: mousePos.x - 12,
        y: mousePos.y - 12,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
    >
      <div className="size-full bg-white rounded-full" />
    </motion.div>
  );
}

function Index() {
  const [showCutscene, setShowCutscene] = useState(true);
  const [stack, setStack] = useState<StackId>("react");
  const [category, setCategory] = useState<Category>("All");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [deps, setDeps] = useState<{ name: string; packages: string[] } | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const visible = useMemo(
    () => SNIPPETS.filter((s) => category === "All" || s.category === category),
    [category],
  );

  const copySnippet = async (id: number) => {
    const snip = SNIPPETS.find((s) => s.id === id);
    if (!snip) return;
    try {
      const code = atob(snip[stack as keyof typeof snip] as string);
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((v) => (v === id ? null : v)), 1500);
      toast.success("Snippet copied", {
        description: `${snip.name} · ready to paste`,
      });
      // Simple dependency detection for demo
      const dependencies: string[] = [];
      if (atob(snip.react).includes("framer-motion")) dependencies.push("framer-motion");
      if (atob(snip.react).includes("lucide-react")) dependencies.push("lucide-react");

      if (dependencies.length) {
        setDeps({ name: snip.name, packages: dependencies });
      }
    } catch {
      toast.error("Clipboard unavailable");
    }
  };

  const copyInstall = async () => {
    if (!deps) return;
    await navigator.clipboard.writeText(`npm install ${deps.packages.join(" ")}`);
    toast.success("Install command copied");
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-aura/30 overflow-x-hidden scroll-smooth cursor-none">
      <CustomCursor />
      <AnimatePresence>
        {showCutscene && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100]"
          >
            <Cutscene onComplete={() => setShowCutscene(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-aura z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="noise-overlay fixed inset-0 pointer-events-none z-40 opacity-[0.03]" />

      {/* Optimized Ambient aura blobs */}
      <motion.div
        style={{
          y: useSpring(useScroll().scrollYProgress, { stiffness: 50, damping: 20 }),
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -top-40 -left-24 size-[500px] aura-radial z-0"
      />

      <motion.div
        style={{
          y: useSpring(useScroll().scrollYProgress, { stiffness: 40, damping: 15 }),
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none fixed top-[40%] -right-48 size-[600px] aura-radial z-0"
      />

      {/* Sticky header: Floating Boutique */}
      <div className="fixed top-0 inset-x-0 z-[100] p-6 pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto glass-morphism rounded-2xl pointer-events-auto shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="px-8 py-5 flex items-center justify-between gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative size-3 rounded-full bg-aura">
                <div className="absolute inset-0 rounded-full bg-aura animate-ping opacity-40" />
                <div className="absolute inset-[-4px] rounded-full border border-aura/20 animate-pulse" />
              </div>
              <span className="font-display italic text-xl tracking-tighter">MVMAURA</span>
              <span className="hidden sm:inline text-[9px] font-mono text-aura/60 uppercase tracking-[0.3em] ml-2">
                v4 · bespoke
              </span>
            </motion.a>

            <nav className="flex bg-white/[0.03] ring-1 ring-white/5 p-1 rounded-2xl overflow-x-auto no-scrollbar">
              {STACKS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStack(s.id as StackId)}
                  className={
                    "px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg whitespace-nowrap transition-all duration-700 " +
                    (stack === s.id
                      ? "bg-white text-black shadow-[0_0_20px_white]"
                      : "text-white/30 hover:text-white/80 hover:bg-white/5")
                  }
                >
                  {s.name}
                </button>
              ))}
            </nav>
          </div>
        </motion.header>
      </div>

      {/* Hero: Flagship Editorial */}
      <section className="relative nike-section min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Flagship: AuraMasterpiece */}
        <div className="absolute inset-0 z-0 opacity-40 scale-110 pointer-events-none">
          <Previews.AuraMasterpiece />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[clamp(4rem,15vw,14rem)] leading-[0.8] tracking-[-0.04em] text-white selection:bg-aura">
              <span className="block opacity-20 hover:opacity-100 transition-opacity duration-1000">
                LIMITLESS
              </span>
              <span className="block italic shimmer-text drop-shadow-[0_0_50px_var(--aura-soft)]">
                MOTION
              </span>
            </h1>

            <div className="mt-12 flex flex-col items-center gap-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/40 text-lg md:text-2xl max-w-[40ch] leading-tight font-medium uppercase tracking-widest"
              >
                The v4 Anthology. High-performance aura systems for the top 0.1% of interfaces.
              </motion.p>

              <div className="flex items-center gap-6">
                <button className="px-12 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-none hover:bg-aura hover:scale-105 transition-all active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  Explore Systems
                </button>
                <div className="hidden md:flex items-center gap-4">
                  <div className="w-12 h-px bg-white/20" />
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    Scroll to begin
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Stack Stats */}
        <div className="absolute bottom-12 left-12 flex flex-col gap-1 items-start">
          <span className="text-[9px] font-mono text-aura/50 font-bold tracking-widest">
            PROTOCOL::V4
          </span>
          <span className="text-[14px] font-mono text-white/80 font-medium tracking-tight">
            NODES_LOADED: {visible.length}
          </span>
        </div>
      </section>

      {/* Gallery: Asymmetrical Editorial Grid */}
      <main className="px-6 pb-40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="space-y-4">
              <h2 className="text-[10px] font-mono text-aura font-bold tracking-[0.5em] uppercase">
                The Collection
              </h2>
              <p className="text-4xl md:text-7xl font-display italic text-white leading-none tracking-tight">
                Bespoke artifacts.
              </p>
            </div>
            {/* Category chips moved here for better editorial flow */}
            <div className="flex flex-wrap gap-2 max-w-xl justify-end">
              {CATEGORIES.map((c) => {
                const active = category === c;
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c as Category)}
                    className={
                      "px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-500 " +
                      (active
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white/40 border-white/10 hover:border-white/40 hover:text-white")
                    }
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {visible.map((s, i) => {
                const isCopied = copiedId === s.id;

                return (
                  <motion.div
                    key={s.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      delay: (i % 6) * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="break-inside-avoid"
                  >
                    <motion.button
                      onClick={() => copySnippet(s.id)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className={
                        "group relative w-full text-left bg-surface border border-white/[0.03] rounded-3xl p-8 transition-all duration-500 hover:border-aura/30 hover:bg-surface-2 " +
                        (isCopied
                          ? "ring-2 ring-aura shadow-[0_0_100px_var(--aura-soft)]"
                          : "shadow-2xl")
                      }
                    >
                      {/* Hover Aura Effect */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05)_0%,transparent_50%)]" />
                      </div>

                      <div className="relative flex justify-between items-start mb-8">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[8px] font-mono text-aura/60 font-bold uppercase tracking-[0.3em]">
                              Module::{s.id.toString().padStart(3, "0")}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold tracking-tight text-white/90 group-hover:text-aura transition-colors duration-500">
                            {s.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] text-white/30 font-mono uppercase tracking-widest">
                              {s.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="px-3 py-1 bg-aura/10 border border-aura/30 rounded-full text-[8px] font-mono text-aura uppercase tracking-tighter">
                            Performance_A
                          </div>
                        </div>
                      </div>

                      <div className="relative flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-white/[0.03] group-hover:border-white/10 transition-colors h-64 shadow-inner">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
                          <svg viewBox="0 0 200 200" className="size-full">
                            <filter id="noiseFilter">
                              <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.65"
                                numOctaves="3"
                                stitchTiles="stitch"
                              />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                          </svg>
                        </div>

                        <SnippetPreview id={s.id} name={s.name} category={s.category} />
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <AnimatePresence mode="wait">
                            {isCopied ? (
                              <motion.div
                                key="copied"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 text-aura"
                              >
                                <Check className="size-4" />
                                <span className="text-[11px] font-bold uppercase tracking-wider">
                                  Copied
                                </span>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="copy"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors"
                              >
                                <Copy className="size-3.5" />
                                <span className="text-[10px] font-semibold uppercase tracking-widest">
                                  Tap to capture
                                </span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="flex items-center gap-1">
                          <div className="size-1 rounded-full bg-white/20" />
                          <div className="size-1 rounded-full bg-white/10" />
                          <div className="size-1 rounded-full bg-white/5" />
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <footer className="max-w-7xl mx-auto mt-40 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-aura" />
                <span className="font-display italic text-3xl tracking-tighter">MVMAURA</span>
              </div>
              <p className="text-sm text-white/30 max-w-sm font-light leading-relaxed">
                Precision-engineered motion for the modern web. Every frame crafted with purpose.
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                © MVMSOLO · BUILT BY JULES
              </p>
              <div className="flex gap-4 text-white/40 text-[11px] font-medium">
                <a href="#" className="hover:text-aura transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-aura transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-aura transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Dependency terminal panel */}
      <AnimatePresence>
        {deps && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 inset-x-6 z-[60]"
          >
            <div className="max-w-2xl mx-auto bg-neutral-900/90 backdrop-blur-3xl border border-aura/30 rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <Terminal className="size-4 text-aura" />
                  <span className="text-[11px] font-mono text-aura font-bold uppercase tracking-[0.2em]">
                    Provisioning · {deps.name}
                  </span>
                </div>
                <button
                  onClick={() => setDeps(null)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="p-6 flex items-center justify-between gap-6">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <span className="text-aura/60 font-mono text-lg animate-pulse">›</span>
                  <code className="text-sm font-mono text-white/80 break-all bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.05]">
                    npm install {deps.packages.join(" ")}
                  </code>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={copyInstall}
                  className="shrink-0 px-6 py-2.5 bg-aura text-black font-bold rounded-xl shadow-xl shadow-aura/20 hover:shadow-aura/40 transition-all text-[11px] uppercase tracking-wider"
                >
                  Capture Command
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Lazy/Performance optimized preview component
import * as Previews from "@/components/previews";

function SnippetPreview({ id, name, category }: { id: number; name: string; category: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Map snippet name to component
  const ComponentName = name.replace(/ /g, "");
  const PreviewComponent =
    (Previews as Record<string, React.ComponentType>)[ComponentName] ||
    (() => <div className="text-white/20 text-xs font-mono">PREVIEW::{category}</div>);

  return (
    <div ref={containerRef} className="size-full flex items-center justify-center p-4">
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="size-full flex items-center justify-center"
        >
          <PreviewComponent />
        </motion.div>
      ) : (
        <div className="size-8 rounded-full border border-white/5 animate-pulse" />
      )}
    </div>
  );
}
