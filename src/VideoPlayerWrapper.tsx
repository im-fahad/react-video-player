"use client";

import React, { useMemo, useRef, useState } from "react";
import { HLSPlayer } from "./HLSPlayer";
import { IconDesktop, IconMobile, IconPlay, IconX } from "./utils/icons";
import clsx from "clsx";
import { DeviceMode, VideoPlayerWrapperProps } from "./types";

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
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [device, setDevice] = useState<DeviceMode>(defaultDevice);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const aspectClass = useMemo(() => {
        if (device === "mobile") return "aspect-[9/16]";
        return "aspect-[16/9]";
    }, [device]);

    const frameMaxWidth = useMemo(() => {
        if (device === "mobile") return "max-w-[420px]";
        return "max-w-[960px]";
    }, [device]);

    const hoverStart = async () => {
        if (!hoverPlay) return;
        const el = videoRef.current;
        if (!el) return;

        try {
            if (el.readyState < 2) el.load();
            await el.play();
            setIsPlaying(true);
        } catch {
            setIsPlaying(false);
        }
    };

    const hoverStop = () => {
        if (!hoverPlay) return;
        const el = videoRef.current;
        if (!el) return;

        el.pause();
        setIsPlaying(false);
    };

    const togglePlay = async () => {
        const el = videoRef.current;
        if (!el) return;

        try {
            if (el.paused) {
                await el.play();
                setIsPlaying(true);
            } else {
                el.pause();
                setIsPlaying(false);
            }
        } catch {
            setIsPlaying(false);
        }
    };

    return (
        <div className={clsx("w-full", className)}>
            <div
                className={[
                    "relative overflow-hidden rounded-3xl",
                    "bg-neutral-900/30 shadow-2xl",
                    "ring-1 ring-white/10",
                    "mx-auto w-full",
                    frameMaxWidth,
                    aspectClass,
                ].join(" ")}
                onMouseEnter={() => {
                    setShowTooltip(true);
                    void hoverStart();
                }}
                onMouseLeave={() => {
                    setShowTooltip(false);
                    hoverStop();
                }}
            >
                {/* HLSPlayer inside */}
                <HLSPlayer
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    muted={muted}
                    loop={loop}
                    playsInline
                    preload="metadata"
                    controls={controls}
                    className="h-full w-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                />

                {/* vignette overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/35 via-black/0 to-black/35" />

                {/* Top-left pill toggle */}
                {showDeviceToggle && (
                    <div className="absolute left-4 top-4">
                        <div className="flex items-center overflow-hidden rounded-2xl bg-white/95 shadow-lg ring-1 ring-black/5">
                            <button
                                type="button"
                                onClick={() => setDevice("desktop")}
                                className={[
                                    "flex items-center gap-2 px-4 py-2 text-sm font-semibold z-10 cursor-pointer",
                                    device === "desktop"
                                        ? "text-violet-700"
                                        : "text-neutral-500 hover:text-neutral-700",
                                ].join(" ")}
                            >
                                <IconDesktop className="h-5 w-5" />
                            </button>

                            <div className="h-7 w-px bg-neutral-200" />

                            <button
                                type="button"
                                onClick={() => setDevice("mobile")}
                                className={[
                                    "flex items-center gap-2 px-4 py-2 text-sm font-semibold z-10 cursor-pointer",
                                    device === "mobile"
                                        ? "text-violet-700"
                                        : "text-neutral-500 hover:text-neutral-700",
                                ].join(" ")}
                            >
                                <IconMobile className="h-5 w-5 " />
                            </button>
                        </div>
                    </div>
                )}

                {/* Top-right close */}
                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/35 text-white backdrop-blur-md ring-1 ring-white/15 hover:bg-black/50 cursor-pointer z-10"
                        aria-label="Close"
                    >
                        <IconX className="h-5 w-5" />
                    </button>
                )}

                {!isPlaying && (
                    <>
                        {/* Center play button + tooltip */}
                        <div className="absolute inset-0 grid place-items-center">
                            <button
                                type="button"
                                onClick={() => void togglePlay()}
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                className={[
                                    "relative grid h-14 w-14 place-items-center rounded-full cursor-pointer ring-1 ring-white/15",
                                    "bg-violet-700/50 hover:bg-violet-700/90 bg-neutral-200/5 bg-blend-overlay shadow-xl",
                                    "transition-opacity duration-200",
                                ].join(" ")}
                                aria-label="Play"
                            >
                                <IconPlay className="h-7 w-7 translate-x-px" />

                                {tooltipText && showTooltip && !isPlaying && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-black/70 px-3 py-1.5 text-xs text-white shadow-lg ring-1 ring-white/10 backdrop-blur">
                                        {tooltipText}
                                    </div>
                                )}
                            </button>
                        </div>
                    </>
                )}

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/35 to-transparent" />
            </div>
        </div>
    );
};

export default VideoPlayerWrapper;
