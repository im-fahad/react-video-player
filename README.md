# @glitchlab/react-video-player

A lightweight, HLS-capable React video player with a polished overlay UI, device-mode toggle, hover-to-play, and **zero global CSS side-effects**. Works seamlessly with Next.js App Router.

[![npm](https://img.shields.io/npm/v/@glitchlab/react-video-player.svg)](https://www.npmjs.com/package/@glitchlab/react-video-player)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@glitchlab/react-video-player.svg)](https://bundlephobia.com/package/@glitchlab/react-video-player)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![types: TypeScript](https://img.shields.io/badge/types-TypeScript-blue.svg)](#typescript)

**Live demo →** <https://video-player-playgraound.vercel.app/> — drop in a video file or paste any URL (HLS `.m3u8` supported) to try the player end-to-end.

---

## Why this player

- **HLS streaming** via `hls.js` with automatic native fallback (Safari)
- **Next.js App Router compatible** — `"use client"` is preserved in the build
- **Scoped CSS, no preflight** — all styles live under `.gvp-root`. No `*` resets, no theme tokens leaked into your design system
- **Device-mode toggle** — flip between desktop (16:9) and mobile (9:16) presets
- **Hover-to-play** with safe play/pause race handling
- Tiny: ~3 KB CSS gzipped, ~3 KB JS gzipped
- Fully typed; SSR-safe

---

## Installation

```bash
npm install @glitchlab/react-video-player hls.js
# or
pnpm add @glitchlab/react-video-player hls.js
# or
yarn add @glitchlab/react-video-player hls.js
```

> **Peer dependencies:** `react >= 18`, `react-dom >= 18`, `hls.js >= 1`

Import the stylesheet once at your app entry:

```ts
import "@glitchlab/react-video-player/style.css";
```

---

## Quick start

```tsx
import { ReactVideoPlayer } from "@glitchlab/react-video-player";
import "@glitchlab/react-video-player/style.css";

export default function App() {
    return (
        <ReactVideoPlayer
            src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            poster="/images/poster.jpg"
        />
    );
}
```

That's the entire surface area you need to start. The player auto-detects `.m3u8` URLs and routes them through `hls.js`; everything else plays natively.

---

## Next.js (App Router)

The package preserves the `"use client"` directive in its bundled output, so you can import it directly from a server component:

```tsx
// app/page.tsx — server component
import { ReactVideoPlayer } from "@glitchlab/react-video-player";
import "@glitchlab/react-video-player/style.css";

export default function Page() {
    return (
        <main>
            <ReactVideoPlayer src="/videos/hero.m3u8" poster="/images/hero.jpg" />
        </main>
    );
}
```

No client-component wrapper required.

---

## Props

| Prop               | Type                                              | Default                                 | Description                                                                              |
|--------------------|---------------------------------------------------|-----------------------------------------|------------------------------------------------------------------------------------------|
| `src`              | `string`                                          | —                                       | **Required.** Video URL. `.m3u8` is routed through HLS automatically.                    |
| `poster`           | `string`                                          | —                                       | Poster image shown before playback starts.                                               |
| `showDeviceToggle` | `boolean`                                         | `true`                                  | Show the desktop/mobile toggle pill in the top-left.                                     |
| `defaultDevice`    | `"desktop" \| "mobile"`                           | `"desktop"`                             | Initial device mode.                                                                     |
| `hoverPlay`        | `boolean`                                         | `false`                                 | Start playback on mouse-enter, pause on mouse-leave.                                     |
| `tooltipText`      | `string`                                          | —                                       | Tooltip text shown above the play button on hover.                                       |
| `onClose`          | `() => void`                                      | —                                       | If provided, renders a close button in the top-right.                                    |
| `className`        | `string`                                          | `""`                                    | Extra class added to the outer container (alongside `.gvp-root`).                        |
| `muted`            | `boolean`                                         | `true`                                  | Mute the video. Required for autoplay in most browsers.                                  |
| `loop`             | `boolean`                                         | `false`                                 | Loop playback.                                                                           |
| `controls`         | `boolean`                                         | `false`                                 | Show native browser controls.                                                            |
| `autoPlay`         | `boolean`                                         | `false`                                 | Start playback as soon as the source loads. Browsers block sound-on autoplay, so this only fires when `muted` is also `true` (the default). |
| `frameMaxWidth`    | `{ desktop?: string; mobile?: string }`           | `{ desktop: "960px", mobile: "420px" }` | Max width of the player in each device mode.                                             |
| `aspectRatio`      | `{ desktop?: AspectRatio; mobile?: AspectRatio }` | `{ desktop: "16/9", mobile: "9/16" }`   | Aspect ratio per device mode. `AspectRatio` is `` `${number}/${number}` ``.              |
| `hlsConfig`        | `Hls.HlsConfig`                                   | —                                       | Optional hls.js config. Pass a stable reference (e.g. `useMemo`) to avoid HLS rebuilds.  |
| `children`         | `React.ReactNode`                                 | —                                       | Rendered inside the underlying `<video>`. Use for `<track>` elements (captions/subs).    |

---

## YouTube URLs

Pass any common YouTube URL as `src` and the player swaps the `<video>` element for a privacy-enhanced (`youtube-nocookie.com`) embed inside the same styled frame — no extra prop needed:

```tsx
<ReactVideoPlayer src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
<ReactVideoPlayer src="https://youtu.be/dQw4w9WgXcQ?t=90" autoPlay />
<ReactVideoPlayer src="https://www.youtube.com/shorts/dQw4w9WgXcQ" />
```

Recognised forms: `youtube.com/watch?v=ID`, `youtu.be/ID`, `youtube.com/embed/ID`, `youtube.com/shorts/ID`, `youtube.com/live/ID`, `music.youtube.com/watch?v=ID`, and bare 11-character IDs. A `?t=` / `?start=` timestamp in the URL is honored.

### Which props work over YouTube

| Prop                                  | YouTube behavior                                                                                  |
|---------------------------------------|---------------------------------------------------------------------------------------------------|
| `muted`                               | ✅ Mutes the embed (`mute=1`).                                                                     |
| `loop`                                | ✅ Loops the single video (`loop=1` + `playlist=<id>`, YouTube's required workaround).             |
| `controls`                            | ✅ Shows/hides YouTube's controls (`controls=1` / `controls=0`).                                   |
| `autoPlay`                            | ✅ Autoplays (`autoplay=1`). YouTube + browsers force muted autoplay, so `mute=1` is set too — even if `muted={false}`. |
| `showDeviceToggle` / `defaultDevice`  | ✅ The desktop/mobile aspect-ratio toggle still works.                                             |
| `onClose`                             | ✅ The close button still renders and fires.                                                       |
| `className` / `frameMaxWidth` / `aspectRatio` | ✅ Frame styling, sizing, and aspect ratio all apply.                                      |
| `hoverPlay`                           | ❌ **No effect.** Hover-to-play needs programmatic pause, which requires the YouTube IFrame Player API (not loaded). YouTube's own controls handle starting playback. |
| `tooltipText`                         | ❌ **No effect.** The tooltip is attached to the centered play-button overlay, which isn't rendered for YouTube. |
| `poster`                              | ❌ **No effect.** YouTube shows its own video thumbnail; a custom poster would require an overlay layer. |
| `children` (`<track>` captions)       | ❌ **No effect.** There's no `<video>` element to attach `<track>` to — use YouTube's own caption settings. |
| `hlsConfig`                           | ❌ **No effect.** Not an HLS stream.                                                               |

> If you need `hoverPlay`, a custom poster, or a play-button overlay over a YouTube video, you'd need the YouTube IFrame Player API integrated — that's not in this build (it'd add a ~30 KB external script). Open an issue if it matters for your use case.

---

## Examples

### Looping background video, no UI chrome

```tsx
<ReactVideoPlayer
    src="/videos/hero.m3u8"
    muted
    loop
    showDeviceToggle={false}
/>
```

### Hover-to-play with a tooltip

```tsx
<ReactVideoPlayer
    src="/videos/demo.mp4"
    poster="/images/thumb.jpg"
    hoverPlay
    tooltipText="Watch the demo"
/>
```

### Dismissible player in a modal

```tsx
function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;
    return (
        <div className="modal-backdrop">
            <ReactVideoPlayer
                src="/videos/walkthrough.m3u8"
                onClose={onClose}
                showDeviceToggle={false}
            />
        </div>
    );
}
```

### Custom aspect ratio and frame width

```tsx
<ReactVideoPlayer
    src="/videos/portrait.mp4"
    defaultDevice="mobile"
    aspectRatio={{ desktop: "4/3", mobile: "9/16" }}
    frameMaxWidth={{ desktop: "720px", mobile: "360px" }}
/>
```

### Captions and subtitles

```tsx
<ReactVideoPlayer src="/videos/talk.m3u8" controls>
    <track kind="captions" src="/captions/talk.en.vtt" srcLang="en" label="English" default />
    <track kind="subtitles" src="/captions/talk.es.vtt" srcLang="es" label="Spanish" />
</ReactVideoPlayer>
```

### Custom hls.js configuration

```tsx
import { useMemo } from "react";
import { ReactVideoPlayer } from "@glitchlab/react-video-player";

export default function LiveStream() {
    const hlsConfig = useMemo(
        () => ({
            enableWorker: true,
            lowLatencyMode: true,
            maxBufferLength: 30,
        }),
        []
    );

    return <ReactVideoPlayer src="/videos/live.m3u8" hlsConfig={hlsConfig} />;
}
```

> **Always memoize `hlsConfig`.** A fresh object identity each render tears down and rebuilds the entire HLS instance.

---

## TypeScript

Full type definitions ship with the package. Re-exported types:

```ts
import type { ReactVideoPlayerProps, AspectRatio } from "@glitchlab/react-video-player";
```

---

## Styling and customization

All styles are scoped under `.gvp-root`. The CSS file (~3 KB minified) contains no global resets and no design-token bleed. Override what you need:

```css
.gvp-root {
    border-radius: 8px;
}

.gvp-play {
    background-color: rebeccapurple;
}

.gvp-toggle-btn.is-active {
    color: deeppink;
}
```

Available class hooks:

| Class                 | Element                                       |
|-----------------------|-----------------------------------------------|
| `.gvp-root`           | Outer container                               |
| `.gvp-video`          | Underlying `<video>` element                  |
| `.gvp-vignette`       | Top vignette overlay                          |
| `.gvp-bottom-fade`    | Bottom gradient                               |
| `.gvp-toggle`         | Device-toggle wrapper                         |
| `.gvp-toggle-pill`    | The pill background                           |
| `.gvp-toggle-btn`     | Individual toggle button (`.is-active` modifier) |
| `.gvp-toggle-divider` | Vertical divider between toggle buttons       |
| `.gvp-close`          | Top-right close button                        |
| `.gvp-play-wrap`      | Center play-button container                  |
| `.gvp-play`           | Play button                                   |
| `.gvp-tooltip`        | Tooltip above play button                     |
| `.gvp-icon`           | All inline SVG icons                          |

---

## SSR

The component is SSR-safe. Server output renders the static frame; HLS attaches client-side once the video element mounts. Works with Next.js, Remix, and any Vite-SSR / vanilla SSR setup.

---

## Browser support

- Chromium ≥ 88, Firefox ≥ 78, Safari ≥ 14, Edge ≥ 88
- Native HLS playback on Safari (no `hls.js` cost)
- Worker-based HLS on browsers with MSE

---

## Contributing

```bash
git clone https://github.com/im-fahad/react-video-player.git
cd react-video-player
pnpm install
pnpm test
pnpm build
```

Issues and PRs welcome at <https://github.com/im-fahad/react-video-player/issues>.

---

## License

[MIT](./LICENSE) © im-fahad
