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

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center pointer-events-none"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 50, stiffness: 800, mass: 0.1 }}
      >
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-px bg-aura" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-px bg-aura" />
          <div className="absolute -top-8 left-4 font-mono text-[8px] text-aura/60 whitespace-nowrap">
            X:{mousePos.x.toString().padStart(4, "0")}
            <br />
            Y:{mousePos.y.toString().padStart(4, "0")}
          </div>
        </div>
      </motion.div>
    </div>
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
    <div className="relative min-h-screen bg-background text-foreground selection:bg-aura/30 overflow-x-hidden scroll-smooth cursor-none font-mono">
      <CustomCursor />
      <AnimatePresence>
        {showCutscene && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100]"
          >
            <Cutscene onComplete={() => setShowCutscene(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-aura z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="noise-overlay fixed inset-0 pointer-events-none z-40" />
      <div className="blueprint-grid fixed inset-0 pointer-events-none z-0 opacity-20" />

      {/* Structured Technical Header */}
      <div className="fixed top-0 inset-x-0 z-[50] border-b border-line bg-background/80 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a href="/" className="flex items-center gap-4 group">
            <div className="size-6 bg-aura flex items-center justify-center">
              <div className="size-2 bg-black animate-pulse" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-bold text-lg tracking-tighter">MVMAURA</span>
              <span className="text-[8px] text-aura/60 uppercase tracking-[0.2em]">
                System_v4.0.2
              </span>
            </div>
          </motion.a>

          <nav className="hidden md:flex items-center gap-px bg-line border border-line">
            {STACKS.map((s) => (
              <button
                key={s.id}
                onClick={() => setStack(s.id as StackId)}
                className={
                  "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all " +
                  (stack === s.id
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground/40 hover:text-foreground hover:bg-surface-2")
                }
              >
                {s.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-[10px] text-white/20">
            <span className="animate-pulse">●</span>
            <span>LIVE_OS::STABLE</span>
          </div>
        </div>
      </div>

      {/* Hero: Engineering Blueprint */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 border-b border-line">
        <div className="absolute inset-0 z-0 opacity-10">
          <Previews.AuraMasterpiece />
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 grid grid-cols-12 gap-px bg-line border-x border-line">
          <div className="col-span-12 lg:col-span-8 p-12 bg-background relative overflow-hidden group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] bg-aura/10 text-aura border border-aura/20 px-2 py-0.5">
                  CORE_ENGINE::BRUTAL
                </span>
                <div className="h-px flex-1 bg-line" />
              </div>

              <h1 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-black tracking-tighter uppercase mb-8">
                Engineered
                <br />
                <span className="text-aura">Motion.</span>
              </h1>

              <p className="text-foreground/60 text-lg max-w-xl mb-12 leading-relaxed">
                Tactile Brutalism library for high-precision interfaces. Zero fluff. Pure technical
                performance.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-aura text-black font-bold text-xs uppercase tracking-widest border border-aura hover:bg-transparent hover:text-aura transition-all">
                  Initialize Library
                </button>
                <button className="px-8 py-4 bg-transparent text-foreground font-bold text-xs uppercase tracking-widest border border-line hover:border-foreground transition-all">
                  Documentation
                </button>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-4 p-12 bg-surface relative flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <div className="text-[8px] text-white/20 uppercase vertical-text">METRICS</div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{visible.length}</div>
                  <div className="text-[8px] text-white/40 uppercase tracking-widest">
                    Active_Modules
                  </div>
                </div>
              </div>
              <div className="h-px bg-line" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: "LATENCY", v: "0.04ms" },
                  { l: "FPS", v: "144.0" },
                  { l: "STABLE", v: "100%" },
                  { l: "VERSION", v: "4.0.2" },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="text-[8px] text-white/40 uppercase">{m.l}</div>
                    <div className="text-xs font-bold">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-12">
              <div className="text-[8px] text-white/40 uppercase mb-2 tracking-widest">
                Scroll_to_Explore
              </div>
              <div className="h-24 w-px bg-aura animate-bounce mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery: Technical Bento Grid */}
      <main className="pb-40 relative z-10 border-x border-line max-w-[1600px] mx-auto">
        <div className="p-6 border-b border-line flex flex-col md:flex-row md:items-center justify-between gap-8 bg-surface/50">
          <div className="flex items-center gap-6">
            <div className="text-[10px] text-aura font-bold uppercase tracking-[0.4em]">
              Library::Root
            </div>
            <div className="h-4 w-px bg-line" />
            <div className="text-xs text-white/40 uppercase tracking-widest">
              Filtering: {category}
            </div>
          </div>

          <div className="flex flex-wrap gap-px bg-line border border-line">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c as Category)}
                className={
                  "px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all " +
                  (category === c
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground/40 hover:text-foreground")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-line">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => {
              const isCopied = copiedId === s.id;

              return (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-background group relative"
                >
                  <button
                    onClick={() => copySnippet(s.id)}
                    className="w-full text-left p-8 transition-colors hover:bg-surface-2"
                  >
                    <div className="flex justify-between items-start mb-12">
                      <div>
                        <div className="text-[8px] text-aura font-bold mb-1">
                          ID_{s.id.toString().padStart(3, "0")}
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-tight">{s.name}</h3>
                      </div>
                      <div className="text-[8px] text-white/20 border border-line px-1.5 py-0.5">
                        {s.category}
                      </div>
                    </div>

                    <div className="relative h-48 bg-black/40 border border-line flex items-center justify-center overflow-hidden mb-8">
                      <SnippetPreview id={s.id} name={s.name} category={s.category} />
                      <div className="absolute bottom-2 right-2 text-[6px] text-white/10 uppercase">
                        Render_Node_0{i % 9}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isCopied ? (
                          <span className="text-[8px] text-aura font-bold uppercase tracking-widest">
                            Copied_Success
                          </span>
                        ) : (
                          <span className="text-[8px] text-white/20 uppercase tracking-widest group-hover:text-white/60">
                            Capture_Code
                          </span>
                        )}
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="size-0.5 bg-line group-hover:bg-aura" />
                        ))}
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Footer: Structural Info */}
        <footer className="p-12 border-t border-line grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-4 bg-aura" />
              <span className="text-2xl font-black uppercase tracking-tighter">MVMAURA</span>
            </div>
            <p className="text-xs text-white/40 max-w-xs leading-relaxed uppercase">
              Technical animation repository for high-performance visual systems. Built for
              engineering precision.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col md:items-end justify-between">
            <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-aura">
                Terminal
              </a>
              <a href="#" className="hover:text-aura">
                Repository
              </a>
              <a href="#" className="hover:text-aura">
                Structure
              </a>
            </div>
            <div className="text-[10px] text-white/20 uppercase tracking-[0.5em] mt-12">
              © 2026_MVMSOLO_CORE_SYSTEM
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
            <div className="max-w-2xl mx-auto bg-surface border border-aura shadow-[10px_10px_0px_var(--aura-soft)]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-line">
                <div className="flex items-center gap-3">
                  <Terminal className="size-3 text-aura" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">
                    System_Provisioning::{deps.name}
                  </span>
                </div>
                <button
                  onClick={() => setDeps(null)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-aura font-bold text-sm">CMD_</span>
                  <code className="text-xs bg-black p-3 border border-line w-full">
                    npm install {deps.packages.join(" ")}
                  </code>
                </div>
                <button
                  onClick={copyInstall}
                  className="px-6 py-3 bg-aura text-black font-bold uppercase text-[9px] tracking-widest hover:invert transition-all"
                >
                  Execute_Capture
                </button>
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
