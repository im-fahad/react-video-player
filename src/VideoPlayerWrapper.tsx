"use client";

import clsx from "clsx";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { HLSPlayer } from "./HLSPlayer";
import type { DeviceMode, VideoPlayerWrapperProps } from "./types";
import { IconDesktop, IconMobile, IconPlay, IconX } from "./utils/icons";
import { parseYouTubeId, parseYouTubeStart, youTubeEmbedUrl } from "./utils/youtube";

export const VideoPlayerWrapper: React.FC<VideoPlayerWrapperProps> = ({
    src,
    poster,
    showDeviceToggle = true,
    defaultDevice = "desktop",
    hoverPlay = false,
    tooltipText,
    onClose,
    className = "",
    muted = true,
    loop = false,
    controls = false,
    autoPlay = false,
    frameMaxWidth: customFrameMaxWidth,
    aspectRatio: customAspectRatio,
    hlsConfig,
    children,
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const playPromiseRef = useRef<Promise<void> | null>(null);

    const [device, setDevice] = useState<DeviceMode>(defaultDevice);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const youTubeId = useMemo(() => parseYouTubeId(src), [src]);
    const isYouTube = youTubeId !== null;

    const aspectRatio = useMemo(() => {
        return device === "mobile"
            ? (customAspectRatio?.mobile ?? "9/16")
            : (customAspectRatio?.desktop ?? "16/9");
    }, [device, customAspectRatio]);

    const frameMaxWidth = useMemo(() => {
        return device === "mobile"
            ? (customFrameMaxWidth?.mobile ?? "420px")
            : (customFrameMaxWidth?.desktop ?? "960px");
    }, [device, customFrameMaxWidth]);

    const youTubeSrc = useMemo(
        () =>
            youTubeId
                ? youTubeEmbedUrl(youTubeId, {
                      autoPlay,
                      muted,
                      loop,
                      controls,
                      startSeconds: parseYouTubeStart(src),
                  })
                : null,
        [youTubeId, src, autoPlay, muted, loop, controls]
    );

    const safePause = useCallback(async () => {
        const el = videoRef.current;
        if (!el) return;
        if (playPromiseRef.current) {
            try {
                await playPromiseRef.current;
            } catch {
                /* play was interrupted; nothing to await */
            }
        }
        el.pause();
    }, []);

    const safePlay = useCallback(async () => {
        const el = videoRef.current;
        if (!el) return;
        try {
            if (el.readyState < 2) el.load();
            const p = el.play();
            playPromiseRef.current = p;
            await p;
            setIsPlaying(true);
        } catch {
            setIsPlaying(false);
        } finally {
            playPromiseRef.current = null;
        }
    }, []);

    const hoverStart = useCallback(() => {
        if (!hoverPlay || isYouTube) return;
        void safePlay();
    }, [hoverPlay, isYouTube, safePlay]);

    const hoverStop = useCallback(() => {
        if (!hoverPlay || isYouTube) return;
        void safePause().then(() => setIsPlaying(false));
    }, [hoverPlay, isYouTube, safePause]);

    const togglePlay = useCallback(async () => {
        const el = videoRef.current;
        if (!el) return;
        if (el.paused) {
            await safePlay();
        } else {
            await safePause();
            setIsPlaying(false);
        }
    }, [safePlay, safePause]);

    return (
        // The mouse handlers are a progressive enhancement (hoverPlay + tooltip).
        // Keyboard/click users reach the same actions via the inner <button> elements,
        // so the outer container is intentionally non-interactive at the role level.
        // NOSONAR: typescript:S6848
        <div
            className={clsx("gvp-root", className)}
            style={{ width: frameMaxWidth, aspectRatio }}
            onMouseEnter={() => {
                setShowTooltip(true);
                hoverStart();
            }}
            onMouseLeave={() => {
                setShowTooltip(false);
                hoverStop();
            }}
        >
            {isYouTube ? (
                <iframe
                    className="gvp-video gvp-youtube"
                    src={youTubeSrc ?? undefined}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            ) : (
                <HLSPlayer
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    muted={muted}
                    loop={loop}
                    playsInline
                    preload="metadata"
                    controls={controls}
                    autoPlay={autoPlay}
                    hlsConfig={hlsConfig}
                    className="gvp-video"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    {children}
                </HLSPlayer>
            )}

            {!isYouTube && <div className="gvp-vignette" />}

            {showDeviceToggle && (
                <div className="gvp-toggle">
                    <div className="gvp-toggle-pill">
                        <button
                            type="button"
                            onClick={() => setDevice("desktop")}
                            className={clsx(
                                "gvp-toggle-btn",
                                device === "desktop" && "is-active"
                            )}
                            aria-label="Desktop view"
                            aria-pressed={device === "desktop"}
                        >
                            <IconDesktop />
                        </button>

                        <div className="gvp-toggle-divider" />

                        <button
                            type="button"
                            onClick={() => setDevice("mobile")}
                            className={clsx(
                                "gvp-toggle-btn",
                                device === "mobile" && "is-active"
                            )}
                            aria-label="Mobile view"
                            aria-pressed={device === "mobile"}
                        >
                            <IconMobile />
                        </button>
                    </div>
                </div>
            )}

            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    className="gvp-close"
                    aria-label="Close"
                >
                    <IconX />
                </button>
            )}

            {!isYouTube && !isPlaying && (
                <div className="gvp-play-wrap">
                    <button
                        type="button"
                        onClick={() => void togglePlay()}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className="gvp-play"
                        aria-label="Play"
                    >
                        <IconPlay />
                        {tooltipText && showTooltip && (
                            <span className="gvp-tooltip" role="tooltip">
                                {tooltipText}
                            </span>
                        )}
                    </button>
                </div>
            )}

            {!isYouTube && <div className="gvp-bottom-fade" />}
        </div>
    );
};

export default VideoPlayerWrapper;
