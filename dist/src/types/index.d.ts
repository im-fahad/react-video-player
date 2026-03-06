import { HlsConfig } from 'hls.js';

export type DeviceMode = "desktop" | "mobile";
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
