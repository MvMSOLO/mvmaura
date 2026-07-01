# MVMAURA — Reja

Foydalanuvchi tanlagan "Laboratory amber dark" yo'nalishida animatsion paketlar kutubxonasini quramiz. Sayt bitta sahifa (SPA) — top da stack tanlagich, ostida animatsiya galereyasi, kartaga bosilsa kod clipboardga ko'chiriladi, kerak bo'lsa `npm install ...` uchun terminal panel ko'rinadi.

## 6 ta task (kelishilganidek)

1. **Design token'lar va global styling** — `src/styles.css` ga amber-dark palette, Instrument Sans + Inter + JetBrains Mono fontlari (`<link>` orqali `__root.tsx` head'da), noise overlay, `aura-pulse` / `text-shimmer` / `float` keyframes, semantic tokenlar (`--bg`, `--surface`, `--aura`, `--text-muted` va h.k.).
2. **Snippet ma'lumot bazasi** — `src/data/snippets.ts` da 6 ta stack × ~6 ta snippet: `{ id, stack, category, name, tag, preview: ReactNode, code: string, dependencies?: string[] }`. Stacklar: React, TypeScript, HTML/CSS, Tailwind, Vue, Svelte. Kategoriyalar: Text, Buttons, Loaders, Backgrounds, Cursors, Transitions.
3. **Live animatsion preview komponentlari** — `src/components/previews/` ichida har snippet uchun mini live preview (ShimmerText, IonPulsar, MagneticButton, AuroraBg, GlowCursor, FadeSlide va h.k.) — real ishlaydigan CSS/React animatsiyalar, hammasi seed HTMLdan farqli va boy.
4. **Layout: Header + StackSwitcher + CategoryChips + Hero** — Sticky top bar (MVMAURA logo + amber dot pulse), pill stack switcher (URL search paramga bog'liq: `?stack=react`), aura-glow hero ("Motion for craftsmen" shimmer text), overflow-x scrollable kategoriya chiplari.
5. **Snippet card + copy interaction** — Butun karta bosiladi → `navigator.clipboard.writeText(code)` → amber toast (sonner) "Snippet copied". Agar `dependencies` mavjud bo'lsa, pastda fixed terminal panel slide-up qilib chiqadi: `npm install ...` + o'z Copy tugmasi bilan. X tugma orqali yopiladi. Nusxa olingan karta 1s davomida aura glow + amber ring bilan yonadi.
6. **Route + SEO + placeholder tozalash** — `src/routes/index.tsx` dagi placeholder olib tashlanadi, sahifa MVMAURA bo'ladi. `__root.tsx` head'iga title "MVMAURA — Animation packs for developers", description, og/twitter meta, va Google Fonts `<link>` teglari qo'shiladi. Kod tokenlar bilan yozilishi va hardcoded rang bo'lmasligi tekshiriladi.

## Texnik tafsilotlar

- **Stack**: mavjud TanStack Start + Tailwind v4. Yangi paket kerak emas — `sonner`, `lucide-react` allaqachon shadcn bilan keladi.
- **Fontlar**: `__root.tsx` head'idagi `links` massiviga Google Fonts `<link>` qo'shamiz (Tailwind v4 CSS `@import` remote URL'lardan xatolik beradi). Keyin `styles.css` `@theme` ichida `--font-display`, `--font-body`, `--font-mono` ro'yxatga olamiz.
- **Rang tokenlari**: `styles.css` da `@theme inline` orqali `--color-bg: #09090b`, `--color-surface: #121214`, `--color-aura: #f59e0b`, `--color-text-muted: #a1a1aa` va h.k. Mavjud shadcn tokenlar (`--background`, `--foreground`) ham amber-dark ga qayta bog'lanadi, dark mode default.
- **Stack tanlash state**: TanStack Router `useSearch` orqali `?stack=react|ts|html|tailwind|vue|svelte`. O'zgarganda snippetlar `filter` orqali qayta render, sahifa reloadsiz.
- **Copy holati**: `useState<string | null>(copiedId)` + `setTimeout 1500ms`. `dependencies` bo'lsa `activeDeps` state ga qo'yiladi, terminal panel `AnimatePresence`siz oddiy CSS slide-up bilan chiqadi (Motion for React shart emas — CSS transitions yetadi).
- **Toast**: `sonner` allaqachon root'da bor deb faraz, agar yo'q bo'lsa `__root.tsx` ga `<Toaster />` qo'shamiz (theme dark, position top-center, amber accent).
- **Preview xavfsizligi**: har preview alohida `overflow-hidden` container ichida, cursor-follow effektlar faqat card scope'da.

## Cheklovlar

- Backend / DB / auth **yo'q** — hammasi statik ma'lumot.
- Foydalanuvchi kod yuklashi / login qilishi shart emas.
- Kod snippetlar `snippets.ts` da template string sifatida, birinchi versiyada foydalanuvchi qo'sha olmaydi (kelajakda kengaytirsa bo'ladi).

Reja tasdiqlansa, 6 taskni ketma-ket bajarib bugun tugataman.
