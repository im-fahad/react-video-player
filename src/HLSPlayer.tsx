"use client";

import Hls from "hls.js";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import type { HLSPlayerProps } from "./types";

export const HLSPlayer = React.forwardRef<HTMLVideoElement, HLSPlayerProps>(
    ({ src, hlsConfig, isHls, ...videoProps }, forwardedRef) => {
        const internalRef = useRef<HTMLVideoElement | null>(null);
        const hlsRef = useRef<Hls | null>(null);

        useImperativeHandle(forwardedRef, () => internalRef.current as HTMLVideoElement);

        const canUseHlsJs = typeof window !== "undefined" && Hls.isSupported();
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
            while (videoEl.firstChild) videoEl.removeChild(videoEl.firstChild);

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
                while (videoEl.firstChild) videoEl.removeChild(videoEl.firstChild);
                videoEl.load();
            };
        }, [src, shouldUseHls, hlsConfig]);

        return <video ref={internalRef} {...videoProps} />;
    }
);

HLSPlayer.displayName = "HLSPlayer";
export default HLSPlayer;
