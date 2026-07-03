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
    restDelta: 0.001
  });

  const visible = useMemo(
    () =>
      SNIPPETS.filter((s) => (category === "All" || s.category === category)),
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
      if (atob(snip.react).includes('framer-motion')) dependencies.push('framer-motion');
      if (atob(snip.react).includes('lucide-react')) dependencies.push('lucide-react');

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
    <div className="relative min-h-screen bg-background text-foreground selection:bg-aura/30 overflow-x-hidden scroll-smooth">
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
          y: useSpring(useScroll().scrollYProgress, { stiffness: 50, damping: 20 })
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed -top-40 -left-24 size-[500px] aura-radial z-0"
      />

      <motion.div
        style={{
          y: useSpring(useScroll().scrollYProgress, { stiffness: 40, damping: 15 })
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none fixed top-[40%] -right-48 size-[600px] aura-radial z-0"
      />

      {/* Sticky header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/[0.03]"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
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
                  "px-4 py-2 text-[11px] font-semibold rounded-xl whitespace-nowrap transition-all duration-500 " +
                  (stack === s.id
                    ? "bg-white/10 text-foreground shadow-xl ring-1 ring-white/10"
                    : "text-white/40 hover:text-white/70 hover:bg-white/5")
                }
              >
                {s.name}
              </button>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter text-balance">
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2 }}
              >
                Motion for
              </motion.span>
               <br />
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="italic bg-gradient-to-r from-orange-500 via-white to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]"
              >
                craftsmen.
              </motion.span>
            </h1>

            <p className="mt-8 text-white/50 text-lg md:text-xl max-w-[48ch] leading-relaxed font-light">
              A curated anthology of aura-grade motion systems. High-fidelity components designed to breathe life into your interfaces.
            </p>

            <div className="mt-12 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                  Browsing
                </span>
                <motion.span
                  key={stack}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-4 py-1.5 rounded-full bg-aura/10 border border-aura/30 text-aura text-[11px] font-mono font-bold"
                >
                  {STACKS.find((s) => s.id === stack)?.name}
                </motion.span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-white/40 font-mono text-[11px] tracking-widest">{visible.length} SYSTEMS LOADED</span>
            </div>
          </motion.div>

          {/* Category chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 flex gap-3 overflow-x-auto pb-4 no-scrollbar"
          >
            {CATEGORIES.map((c, i) => {
              const active = category === c;
              return (
                <motion.button
                  key={c}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCategory(c as Category)}
                  className={
                    "shrink-0 px-5 py-2.5 flex items-center gap-2.5 rounded-2xl text-[12px] font-semibold transition-all duration-500 " +
                    (active
                      ? "bg-aura/10 border border-aura/50 text-white shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                      : "bg-white/[0.03] border border-white/5 text-white/40 hover:border-white/10 hover:text-white/60")
                  }
                >
                  <div className={"size-1.5 rounded-full transition-colors " + (active ? "bg-aura shadow-[0_0_8px_var(--aura)]" : "bg-white/10")} />
                  {c}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <main className="px-6 pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => {
              const isCopied = copiedId === s.id;
              const featured = i === 0 && category === "All";

              return (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    delay: i % 12 * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={featured ? "sm:col-span-2 lg:col-span-2" : ""}
                >
                  <motion.button
                    onClick={() => copySnippet(s.id)}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={
                      "group relative w-full text-left bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 transition-colors hover:border-white/10 overflow-hidden " +
                      (isCopied ? " ring-2 ring-aura/50 shadow-2xl shadow-aura/10" : "")
                    }
                  >
                    {/* Hover Aura Effect */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05)_0%,transparent_50%)]" />
                    </div>

                    <div className="relative flex justify-between items-start mb-8">
                      <div className="space-y-1.5">
                        <h3 className="text-base font-semibold tracking-tight text-white/90">{s.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-aura font-mono font-black uppercase tracking-[0.2em]">
                            Bespoke
                          </span>
                          <span className="size-1 rounded-full bg-white/10" />
                          <span className="text-[9px] text-white/30 font-mono uppercase tracking-widest">
                            {s.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-[9px] font-mono text-white/40">
                          {s.id % 2 === 0 ? 'Spring' : 'Physics'}
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        "relative flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-white/[0.03] group-hover:border-white/10 transition-colors " +
                        (featured ? "h-72" : "h-52")
                      }
                    >
                       <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
                          <svg viewBox="0 0 200 200" className="size-full">
                            <filter id="noiseFilter">
                              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
                            </filter>
                            <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
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
                              <span className="text-[11px] font-bold uppercase tracking-wider">Copied</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors"
                            >
                              <Copy className="size-3.5" />
                              <span className="text-[10px] font-semibold uppercase tracking-widest">Tap to capture</span>
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
              <a href="#" className="hover:text-aura transition-colors">Twitter</a>
              <a href="#" className="hover:text-aura transition-colors">GitHub</a>
              <a href="#" className="hover:text-aura transition-colors">Contact</a>
            </div>
          </div>
        </footer>
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
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Map snippet name to component
  const ComponentName = name.replace(/ /g, '');
  const PreviewComponent = (Previews as any)[ComponentName] || (() => <div className="text-white/20 text-xs font-mono">PREVIEW::{category}</div>);

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
