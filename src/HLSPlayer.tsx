"use client";

import Hls from "hls.js";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import type { HLSPlayerProps } from "./types";

export const HLSPlayer = React.forwardRef<HTMLVideoElement, HLSPlayerProps>(
    ({ src, hlsConfig, isHls, autoPlay, children, ...videoProps }, forwardedRef) => {
        const internalRef = useRef<HTMLVideoElement | null>(null);
        const hlsRef = useRef<Hls | null>(null);

        useImperativeHandle(forwardedRef, () => internalRef.current as HTMLVideoElement);

        const canUseHlsJs = globalThis.window !== undefined && Hls.isSupported();
        const shouldUseHls =
            Boolean(isHls) || (canUseHlsJs && typeof src === "string" && src.endsWith(".m3u8"));

        useEffect(() => {
            if (!src) return;
            const videoEl = internalRef.current;
            if (!videoEl) return;

            // Tries to start playback once the stream is ready. Browsers only
            // honor sound-on autoplay after a user gesture, so this is best
            // effort — silently swallows the NotAllowedError when blocked.
            const tryAutoPlay = () => {
                if (!autoPlay) return;
                videoEl.play().catch(() => {
                    /* autoplay blocked; user gesture required */
                });
            };

            // destroy previous
            if (hlsRef.current) {
                hlsRef.current.destroy();
                hlsRef.current = null;
            }

            // reset video element
            videoEl.pause();
            videoEl.removeAttribute("src");
            while (videoEl.firstChild) videoEl.firstChild.remove();

            if (shouldUseHls) {
                const hls = new Hls(hlsConfig);
                hlsRef.current = hls;

                hls.attachMedia(videoEl);
                hls.loadSource(src);

                hls.on(Hls.Events.MANIFEST_PARSED, tryAutoPlay);
                hls.on(Hls.Events.ERROR, (_evt, data) => {
                    if (data.fatal) {
                        hls.destroy();
                        hlsRef.current = null;
                    }
                });
            } else {
                // native playback
                videoEl.src = src;
                videoEl.load();
                // For a plain <video>, we wait for metadata so play() has
                // something to start.
                videoEl.addEventListener("loadedmetadata", tryAutoPlay, { once: true });
            }

            return () => {
                videoEl.removeEventListener("loadedmetadata", tryAutoPlay);
                if (hlsRef.current) {
                    hlsRef.current.destroy();
                    hlsRef.current = null;
                }
                videoEl.pause();
                videoEl.removeAttribute("src");
                while (videoEl.firstChild) videoEl.firstChild.remove();
                videoEl.load();
            };
        }, [src, shouldUseHls, hlsConfig, autoPlay]);

        // Captions are the consumer's responsibility — pass <track> elements as children.
        // NOSONAR: typescript:S4084
        return (
            <video ref={internalRef} {...videoProps}>
                {children}
            </video>
        );
    }
);

HLSPlayer.displayName = "HLSPlayer";
export default HLSPlayer;
