
export function HardEdgeIsometricV2() {
    return (
        <div className="relative size-24 bg-black border border-white/20 [transform:skewX(-15deg)_rotateX(45deg)] group overflow-hidden">
            <div className="absolute inset-0 bg-aura opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="absolute top-0 left-0 w-full h-full border-b border-aura/40 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 steps(5)" />
        </div>
    );
}

export function AuraNoiseButton() {
    return (
        <button className="relative px-8 py-3 bg-zinc-950 border border-white/10 rounded-lg group overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            <span className="relative z-10 text-xs font-mono uppercase tracking-widest group-hover:text-aura transition-colors">Fragment</span>
        </button>
    );
}

export function BentoMatrixStaggerV2() {
    return (
        <div className="grid grid-cols-4 grid-rows-3 gap-1 w-40 h-28">
            {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/5 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="size-full hover:bg-aura/10 transition-colors" />
                </div>
            ))}
        </div>
    );
}

export function ScanTextRevealV2() {
    return (
        <div className="relative group overflow-hidden px-6 py-2 bg-black/60 border border-white/10">
            <div className="absolute inset-0 bg-aura/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <span className="relative z-10 text-xl font-display italic tracking-widest text-white/40 group-hover:text-white transition-colors">AUTHORIZED</span>
        </div>
    );
}

export function DataStreamHeroV2() {
    return (
        <div className="w-full h-full bg-black relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 flex flex-wrap gap-2 p-2">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-2 w-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
            </div>
            <div className="relative z-10 size-16 border-2 border-aura/40 rounded-full animate-ping" />
        </div>
    );
}
