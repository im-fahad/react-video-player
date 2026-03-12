import type { HlsConfig } from "hls.js";

export type DeviceMode = "desktop" | "mobile";

type AspectRatio = `${number}/${number}`;

export type VideoPlayerWrapperProps = {
    src: string;
    poster?: string;

    showDeviceToggle?: boolean;
    defaultDevice?: DeviceMode;

    hoverPlay?: boolean;

    tooltipText?: string;

    onClose?: () => void;

    className?: string;

    muted?: boolean;
    loop?: boolean;
    controls?: boolean;

    frameMaxWidth?: {
        desktop?: string;
        mobile?: string;
    };

    aspectRatio?: {
        desktop?: AspectRatio;
        mobile?: AspectRatio;
    };
};

export interface HLSPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
    hlsConfig?: HlsConfig;
    isHls?: boolean;
}

export interface HLSPlayerRef {
    video: HTMLVideoElement | null;
    cleanup: () => void;
}
