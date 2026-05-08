"use client";

import Hls from "hls.js";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import type { HLSPlayerProps } from "./types";

export const HLSPlayer = React.forwardRef<HTMLVideoElement, HLSPlayerProps>(
    ({ src, hlsConfig, isHls, children, ...videoProps }, forwardedRef) => {
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
            }

            return () => {
                if (hlsRef.current) {
                    hlsRef.current.destroy();
                    hlsRef.current = null;
                }
                videoEl.pause();
                videoEl.removeAttribute("src");
                while (videoEl.firstChild) videoEl.firstChild.remove();
                videoEl.load();
            };
        }, [src, shouldUseHls, hlsConfig]);

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
