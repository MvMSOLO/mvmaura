import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deps, setDeps] = useState<{ name: string; packages: string[] } | null>(null);

  const visible = useMemo(
    () =>
      SNIPPETS.filter((s) => s.stack === stack && (category === "All" || s.category === category)),
    [stack, category],
  );

  const copySnippet = async (id: string) => {
    const snip = SNIPPETS.find((s) => s.id === id);
    if (!snip) return;
    try {
      // Decode Base64 snippet code
      const code = atob(snip.code);
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((v) => (v === id ? null : v)), 1500);
      toast.success("Snippet copied", {
        description: `${snip.name} · ready to paste`,
      });
      if (snip.dependencies?.length) {
        setDeps({ name: snip.name, packages: snip.dependencies });
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
    <div className="relative min-h-screen bg-background text-foreground selection:bg-aura/30 overflow-x-hidden">
      {showCutscene && <Cutscene onComplete={() => setShowCutscene(false)} />}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-40" />

      {/* Ambient aura blobs */}
      <div className="pointer-events-none fixed -top-40 -left-24 size-[380px] aura-radial opacity-40" />
      <div className="pointer-events-none fixed top-[30%] -right-32 size-[420px] aura-radial opacity-25 [animation-delay:-3s]" />

      {/* Sticky header + stack switcher */}
      <header className="sticky top-0 z-30 bg-background/70 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 group">
            <span className="relative size-2 rounded-full bg-aura shadow-[0_0_12px_var(--aura)]">
              <span className="absolute inset-0 rounded-full bg-aura animate-ping opacity-60" />
            </span>
            <span className="font-display italic text-lg tracking-tight">MVMAURA</span>
            <span className="hidden sm:inline text-[10px] font-mono text-text-muted uppercase tracking-widest ml-1">
              v4 · aura pack ©
            </span>
          </a>

          <nav className="flex bg-[color:var(--surface)] ring-1 ring-white/5 p-1 rounded-full overflow-x-auto no-scrollbar max-w-[60%]">
            {STACKS.map((s) => (
              <button
                key={s.id}
                onClick={() => setStack(s.id)}
                className={
                  "px-3 py-1.5 text-[11px] font-medium rounded-full whitespace-nowrap transition-all " +
                  (stack === s.id
                    ? "bg-[color:var(--surface-2)] text-foreground shadow-sm ring-1 ring-white/5"
                    : "text-text-muted hover:text-foreground")
                }
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-5 pt-14 pb-10 overflow-hidden">
        {/* Micro SVG Background Image */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full rotate-12">
            <defs>
              <linearGradient id="micro-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--aura)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M50 200 Q 100 50 200 200 T 350 200"
              fill="none"
              stroke="url(#micro-grad)"
              strokeWidth="0.5"
              className="animate-pulse"
            />
            <path
              d="M50 220 Q 100 70 200 220 T 350 220"
              fill="none"
              stroke="url(#micro-grad)"
              strokeWidth="0.5"
              style={{ animationDelay: "1s" }}
              className="animate-pulse"
            />
            <path
              d="M50 180 Q 100 30 200 180 T 350 180"
              fill="none"
              stroke="url(#micro-grad)"
              strokeWidth="0.5"
              style={{ animationDelay: "2s" }}
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative inline-block">
            <div className="absolute -inset-14 aura-radial z-0 opacity-70" />
            <h1 className="relative z-10 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
              Motion for <span className="shimmer-text italic">craftsmen.</span>
            </h1>
          </div>
          <p className="mt-5 text-text-muted text-base md:text-lg max-w-[52ch] text-pretty">
            A living library of aura-grade animation snippets. Tap any card to copy the code, paste
            it into your stack, ship the feeling.
          </p>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
              Now browsing
            </span>
            <span className="px-3 py-1 rounded-full bg-aura/10 ring-1 ring-aura/40 text-aura text-xs font-mono">
              {STACKS.find((s) => s.id === stack)?.label}
            </span>
            <span className="text-text-muted text-xs">·</span>
            <span className="text-text-muted text-xs">{visible.length} snippets</span>
          </div>

          {/* Category chips */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={
                    "shrink-0 px-3 py-1.5 flex items-center gap-1.5 rounded-lg text-sm font-medium transition-all " +
                    (active
                      ? "bg-aura/10 ring-1 ring-aura text-foreground"
                      : "bg-[color:var(--surface)] ring-1 ring-white/5 text-text-muted hover:text-foreground")
                  }
                >
                  <span
                    className={"size-1.5 rounded-full " + (active ? "bg-aura" : "bg-neutral-700")}
                  />
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <main className="px-5 pb-40 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((s, i) => {
            const isCopied = copiedId === s.id;
            const featured = i === 0 && category === "All";
            const { Preview } = s;
            return (
              <button
                key={s.id}
                onClick={() => copySnippet(s.id)}
                className={
                  "group relative text-left bg-[color:var(--surface)] ring-1 ring-white/5 rounded-2xl p-4 transition-all active:scale-[0.985] hover:ring-white/10 hover:-translate-y-0.5 overflow-hidden " +
                  (featured ? "sm:col-span-2 lg:col-span-2" : "") +
                  (isCopied
                    ? " ring-aura shadow-[0_0_60px_-10px_var(--aura)] animate-copy-confirm"
                    : "")
                }
              >
                {/* hover aura */}
                <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-30 transition-opacity duration-700 aura-radial" />

                <div className="relative flex justify-between items-start mb-5">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">{s.name}</h3>
                    <p className="text-[10px] text-text-muted uppercase tracking-widest font-mono">
                      {s.tag}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {s.dependencies?.length ? (
                      <span className="py-1 px-2 bg-[color:var(--surface-2)] ring-1 ring-white/5 rounded text-[10px] font-mono text-aura">
                        {s.dependencies[0]}
                        {s.dependencies.length > 1 ? ` +${s.dependencies.length - 1}` : ""}
                      </span>
                    ) : (
                      <span className="py-1 px-2 bg-[color:var(--surface-2)] ring-1 ring-white/5 rounded text-[10px] font-mono text-text-muted">
                        zero-deps
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={
                    "relative flex items-center justify-center overflow-hidden bg-background/60 rounded-lg ring-1 ring-black/20 " +
                    (featured ? "h-56" : "h-40")
                  }
                >
                  {/* Card Background Micro Image */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <pattern
                        id="card-pattern"
                        x="0"
                        y="0"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                      </pattern>
                      <rect width="100" height="100" fill="url(#card-pattern)" />
                    </svg>
                  </div>
                  <Preview />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-text-muted flex items-center gap-1.5">
                    {isCopied ? (
                      <>
                        <Check className="size-3 text-aura" />
                        <span className="text-aura">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        Tap card to copy
                      </>
                    )}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted uppercase">
                    {s.category}
                  </span>
                </div>
              </button>
            );
          })}

          {visible.length === 0 && (
            <div className="col-span-full py-24 text-center text-text-muted">
              <p className="font-mono text-sm">no snippets yet in this bucket.</p>
              <p className="text-xs mt-1">Try another category or stack.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="font-display italic text-2xl">MVMAURA</p>
            <p className="text-xs text-text-muted mt-1">Copy. Paste. Feel the aura. © MVMAURA</p>
          </div>
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
            crafted for builders · {new Date().getFullYear()}
          </p>
        </footer>
      </main>

      {/* Dependency terminal panel */}
      {deps && (
        <div className="fixed bottom-4 inset-x-4 z-50 animate-[slide-up-in_0.5s_cubic-bezier(0.16,1,0.3,1)]">
          <div className="max-w-3xl mx-auto bg-neutral-900/95 backdrop-blur-md ring-1 ring-aura/30 rounded-xl overflow-hidden shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="size-3.5 text-aura" />
                <span className="text-[10px] font-mono text-aura uppercase tracking-widest font-semibold">
                  install first · {deps.name}
                </span>
              </div>
              <button
                onClick={() => setDeps(null)}
                aria-label="Close"
                className="text-text-muted hover:text-foreground transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="p-4 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-start gap-3 min-w-0 flex-1">
                <span className="text-aura font-mono">›</span>
                <code className="text-xs sm:text-sm font-mono text-zinc-200 break-all">
                  npm install {deps.packages.join(" ")}
                </code>
              </div>
              <button
                onClick={copyInstall}
                className="shrink-0 px-3 py-1.5 flex items-center gap-1.5 bg-aura/15 hover:bg-aura/25 text-aura ring-1 ring-aura/40 rounded-md transition-all active:scale-95"
              >
                <Copy className="size-3" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">Copy cmd</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
