import base64
import json
import re

def b64(s):
    return base64.b64encode(s.encode()).decode()

def extract_impls(content):
    results = {}
    # Find all "export function Name() {"
    for match in re.finditer(r'export function (\w+)\(\) \{', content):
        name = match.group(1)
        start_pos = match.end()

        # Find the return statement
        return_match = re.search(r'return\s+', content[start_pos:])
        if not return_match: continue

        impl_start = start_pos + return_match.end()

        # Handle nested parentheses for return (...)
        balance = 0
        impl_end = impl_start
        found_start = False

        for i in range(impl_start, len(content)):
            char = content[i]
            if char == '(':
                balance += 1
                found_start = True
            elif char == ')':
                balance -= 1

            if found_start and balance == 0:
                impl_end = i + 1
                break
            if not found_start and char == ';':
                impl_end = i
                break

        impl = content[impl_start:impl_end].strip()
        if impl.startswith('(') and impl.endswith(')'):
            impl = impl[1:-1].strip()
        results[name] = impl
    return results

with open('src/components/previews.tsx', 'r') as f:
    preview_content = f.read()

impl_dict = extract_impls(preview_content)

names = [
    "ShimmerText", "ElasticText", "WaveText", "PixelText", "LiquidText", "MagneticText", "HolographicText", "GlitchText", "GlitchTextMedium", "TypewriterCode", "FadeSlide", "ScanText", "AuraTextFloat", "RainbowText", "SplitTextReveal",
    "MagneticAuraButton", "CyberButton", "WaveButton", "GlowButton", "LiquidBlobButton", "MagneticButton", "LiquidButton", "NeumorphicBtn", "ShinobiButton", "AuraRadialMenu", "GlassButton", "CyberToggle", "ElasticToggle", "CyberSwitch", "DoubleGlowBtn",
    "LiquidLoader", "PrismLoader", "AuraSpinner", "GooeyLoader", "CyberLoader", "OrbitLoader", "PixelLoader", "DNAHelixLoader", "WaveLoading", "OrbitDots", "SpinRing", "PulseDots", "InfiniteTiles", "SkeletonWave", "BarChartLoader",
    "FloatingIsland", "Floating3DCard", "BentoHover", "InteractiveGridDots", "SpotlightCard", "BentoGridItem", "FloatingDock", "MagneticGrid", "GridPulse", "GridHover", "BentoPulse", "GlassMorphismCard", "HolographicCard", "RefractiveGlass", "TiltCard3D",
    "AuraStarfield", "WarpDriveBg", "RetroGrid", "NoiseBg", "AuraGrid", "AuroraBg", "ParticleField", "CyberRain", "FloatingParticles", "NeonTunnel", "MatrixRain", "FoggyAura", "CosmicDust", "VortexBg", "NebulaDrift", "CosmicResonance", "AuraMasterpiece",
    "CyberScan", "FloatingSphere", "ParticleCircle", "AuraRing", "HologramAvatar", "InteractiveDNA", "GlitchLogo", "FloatingIslandSmall", "IonPulsar", "AuraBlob",
    "MagneticTrailLink", "MorphingShape", "AuraInfinity", "PageSlide", "CircularMask", "PixelDissolve", "AuraBlurFade", "StaggerReveal", "GlitchExit",
    "GlowCursor", "TrailingCursor", "InvertedCursor", "MagneticCursor", "FluidCursor",
    "StructuralRefraction", "MechanicalCommand", "DataStreamAura", "TerminalCursor"
]

categories = ["Text"] * 15 + ["Buttons"] * 15 + ["Loaders"] * 15 + ["Layout"] * 15 + ["Backgrounds"] * 17 + ["Special"] * 10 + ["Transitions"] * 9 + ["Cursors"] * 5 + ["Special"] * 4

def gen_react_snippet(name, impl, cat, i):
    return """import React from 'react';
import { motion } from 'framer-motion';

/**
 * MVMAURA v4 - {name}
 * High-complexity animation module for premium interfaces.
 */
export const {name} = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    className="relative p-12 bg-black border border-white/10 rounded-none overflow-hidden group"
  >
    <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center gap-8">
      <div className="transform transition-all duration-700 group-hover:scale-105">
        {impl}
      </div>
      <div className="flex flex-col items-center gap-2 mt-4">
        <div className="h-px w-8 bg-aura/40 group-hover:w-16 transition-all duration-1000" />
        <span className="text-[9px] font-mono text-aura font-bold uppercase tracking-[0.4em]">MODULE::{name}</span>
      </div>
    </div>
    <div className="absolute top-0 left-0 size-4 border-t border-l border-white/20" />
    <div className="absolute bottom-0 right-0 size-4 border-b border-r border-white/20" />
  </motion.div>
);
""".replace("{name}", name).replace("{impl}", impl)

def framework_conv(impl):
    # Basic JSX to HTML-ish conversion
    s = impl.replace('className=', 'class=')
    s = re.sub(r'style=\{\{\s*animationDelay:\s*`\$\{i\s*\*\s*([\d.]+)\}s`\s*\}\}', r'style="animation-delay: calc(var(--i) * \1s)"', s)
    s = s.replace('key={i}', '')
    return s

def gen_vue_snippet(name, impl, cat):
    impl_v = framework_conv(impl)
    # Handle loops
    impl_v = re.sub(r'\{"(.*?)".split\(""\).map\(\(c, i\) => \(', r'<span v-for="(c, i) in \1.split(\'\')" :key="i">', impl_v)
    impl_v = re.sub(r'\{\.\.\.Array\((\d+)\)\].map\(\(_, i\) => \(', r'<div v-for="i in \1" :key="i">', impl_v)
    impl_v = impl_v.replace('))}', '</span>') # Very naive close

    return """<script setup>
import { motion } from 'motion/vue';
</script>

<template>
  <div class="p-12 bg-black border border-white/10 rounded-none relative overflow-hidden group">
    <motion.div :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" class="relative z-10 flex flex-col items-center">
      {impl}
      <div class="mt-8 text-[9px] font-mono text-aura uppercase tracking-[0.4em]">MODULE::{name}</div>
    </motion.div>
  </div>
</template>
""".replace("{name}", name).replace("{impl}", impl_v)

def gen_svelte_snippet(name, impl, cat):
    impl_s = framework_conv(impl)
    return """<script>
  import { Motion } from 'svelte-motion';
</script>

<Motion let:motion initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <div use:motion class="p-12 bg-black border border-white/10 rounded-none relative group">
    {impl}
    <div class="mt-8 text-[9px] font-mono text-aura uppercase tracking-[0.4em]">MODULE::{name}</div>
  </div>
</Motion>
""".replace("{name}", name).replace("{impl}", impl_s)

def gen_lua_snippet(name, impl, cat):
    return """-- MVMAURA v4 :: {name} :: Luau Module
local {name} = {}
local TweenService = game:GetService("TweenService")

function {name}.new(parent)
    local frame = Instance.new("Frame")
    frame.Name = "Aura_{name}"
    frame.Size = UDim2.new(0, 240, 0, 120)
    frame.BackgroundColor3 = Color3.new(0,0,0)
    frame.BorderSizePixel = 1
    frame.BorderColor3 = Color3.fromHex("#FF4F00")
    frame.Parent = parent

    local label = Instance.new("TextLabel")
    label.Text = "MODULE::{name}"
    label.Font = Enum.Font.Code
    label.TextColor3 = Color3.fromHex("#FF4F00")
    label.Size = UDim2.new(1, 0, 0, 20)
    label.Position = UDim2.new(0, 0, 1, -20)
    label.BackgroundTransparency = 1
    label.Parent = frame

    -- Procedural Animation
    task.spawn(function()
        while true do
            local t = tick()
            frame.Rotation = math.sin(t * 2) * 2
            task.wait()
        end
    end)

    return frame
end
return {name}
""".replace("{name}", name)

def gen_html_snippet(name, impl):
    return """<!-- MVMAURA v4 :: {name} -->
<div class="mvmaura-module" style="background:#000; border:1px solid #333; padding:3rem; display:flex; flex-direction:column; align-items:center;">
  <div class="content">{impl}</div>
  <div style="color:#FF4F00; font-family:monospace; font-size:8px; margin-top:2rem; letter-spacing:0.4em;">MODULE::{name}</div>
</div>
""".replace("{name}", name).replace("{impl}", framework_conv(impl))

snippets = []
for i, name in enumerate(names):
    cat = categories[i] if i < len(categories) else "OTHER"
    impl = impl_dict.get(name, "<div>UNAVAILABLE_IMPLEMENTATION</div>")

    snippets.append({
        "id": i + 1,
        "name": name,
        "category": cat,
        "react": b64(gen_react_snippet(name, impl, cat, i)),
        "vue": b64(gen_vue_snippet(name, impl, cat)),
        "svelte": b64(gen_svelte_snippet(name, impl, cat)),
        "lua": b64(gen_lua_snippet(name, impl, cat)),
        "html": b64(gen_html_snippet(name, impl))
    })

output_file_content = f"""export type StackId = "react" | "vue" | "svelte" | "lua" | "html";
export type Category = "All" | "Text" | "Buttons" | "Loaders" | "Layout" | "Backgrounds" | "Special" | "Transitions" | "Cursors";

export const STACKS = [
  {{ "id": "react", "name": "React", "icon": "Atom" }},
  {{ "id": "vue", "name": "Vue", "icon": "Component" }},
  {{ "id": "svelte", "name": "Svelte", "icon": "Flame" }},
  {{ "id": "lua", "name": "Lua", "icon": "Terminal" }},
  {{ "id": "html", "name": "HTML", "icon": "Code" }}
];
export const CATEGORIES: Category[] = [
  "Text", "Buttons", "Loaders", "Layout", "Backgrounds", "Special", "Transitions", "Cursors"
];
export const SNIPPETS = {json.dumps(snippets, indent=2)};
"""

with open("src/data/snippets.ts", "w") as f:
    f.write(output_file_content)
