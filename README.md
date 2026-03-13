# react-video-player

A lightweight, HLS-capable React video player component with device mode toggling, hover-to-play, and a polished overlay
UI — built with Tailwind CSS.

---

## Features

- 🎬 **HLS streaming** via `hls.js` with automatic fallback to native playback
- 📱 **Device mode toggle** — switch between desktop (16:9) and mobile (9:16) aspect ratios
- 🖱️ **Hover-to-play** — optionally start playback on mouse enter
- 🎯 **Custom play button** with optional tooltip
- ✕ **Close button** via `onClose` callback
- 🎨 Vignette overlays and Tailwind-based styling
- Fully typed with TypeScript

---

## Installation

```bash
npm install react-video-player
# or
yarn add react-video-player
```

> **Peer dependencies:** `react`, `react-dom`, `hls.js`, `clsx`, `tailwindcss`

---

## Usage

```tsx
import {ReactVideoPlayer} from "react-video-player";

export default function App() {
    return (
        <ReactVideoPlayer
            src="https://example.com/video/playlist.m3u8"
            poster="https://example.com/poster.jpg"
        />
    );
}
```

---

## Props

| Prop               | Type                                              | Default                                 | Description                                                                              |
|--------------------|---------------------------------------------------|-----------------------------------------|------------------------------------------------------------------------------------------|
| `src`              | `string`                                          | —                                       | **Required.** Video URL. `.m3u8` files are played via HLS automatically.                 |
| `poster`           | `string`                                          | —                                       | Poster image shown before playback.                                                      |
| `showDeviceToggle` | `boolean`                                         | `true`                                  | Show the desktop/mobile toggle pill in the top-left corner.                              |
| `defaultDevice`    | `"desktop" \| "mobile"`                           | `"desktop"`                             | Initial device mode.                                                                     |
| `hoverPlay`        | `boolean`                                         | `false`                                 | Start playing on mouse enter; pause on mouse leave.                                      |
| `tooltipText`      | `string`                                          | —                                       | Text shown in a tooltip above the play button on hover.                                  |
| `onClose`          | `() => void`                                      | —                                       | If provided, renders a close button in the top-right corner.                             |
| `className`        | `string`                                          | `""`                                    | Additional CSS classes applied to the outer container.                                   |
| `muted`            | `boolean`                                         | `true`                                  | Mute the video.                                                                          |
| `loop`             | `boolean`                                         | `false`                                 | Loop the video.                                                                          |
| `controls`         | `boolean`                                         | `false`                                 | Show native browser video controls.                                                      |
| `frameMaxWidth`    | `{ desktop?: string; mobile?: string }`           | `{ desktop: "960px", mobile: "420px" }` | Max width of the player in each device mode.                                             |
| `aspectRatio`      | `{ desktop?: AspectRatio; mobile?: AspectRatio }` | `{ desktop: "16/9", mobile: "9/16" }`   | Aspect ratio in each device mode. `AspectRatio` is typed as `` `${number}/${number}` ``. |

---

## Examples

### Looping background video with no controls

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
<ReactVideoPlayer
    src="/videos/walkthrough.m3u8"
    onClose={() => setOpen(false)}
    showDeviceToggle={false}
/>
```

### Custom aspect ratio and max width

```tsx
<ReactVideoPlayer
    src="/videos/portrait.mp4"
    defaultDevice="mobile"
    aspectRatio={{desktop: "4/3", mobile: "9/16"}}
    frameMaxWidth={{desktop: "720px", mobile: "360px"}}
/>
```

---

## HLS Support

The `HLSPlayer` component (used internally) detects `.m3u8` sources and routes them through `hls.js` when the browser
supports it. On browsers with native HLS support (e.g. Safari), the video element handles playback directly. You can
also force HLS mode with the `isHls` prop if the URL doesn't end in `.m3u8`.

---

## License

MIT