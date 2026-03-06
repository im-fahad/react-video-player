# react-video-player

React video player with HLS support using **hls.js**. Works with **Next.js + TypeScript**.

## Install
```bash
npm i react-video-player
```

## Next.js (App Router)
```tsx
"use client";

import { HLSPlayer } from "react-video-player";

export default function Page() {
  return (
    <HLSPlayer
      src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      controls
    />
  );
}
```
