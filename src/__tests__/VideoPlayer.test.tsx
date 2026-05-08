import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ReactVideoPlayer } from "../index";

describe("ReactVideoPlayer", () => {
    it("renders a video element with the given src", () => {
        const { container } = render(
            <ReactVideoPlayer src="https://example.com/video.mp4" />
        );
        const video = container.querySelector("video");
        expect(video).toBeInTheDocument();
    });

    it("renders the device toggle by default", () => {
        render(<ReactVideoPlayer src="https://example.com/video.mp4" />);
        expect(screen.getByLabelText("Desktop view")).toBeInTheDocument();
        expect(screen.getByLabelText("Mobile view")).toBeInTheDocument();
    });

    it("hides the device toggle when showDeviceToggle is false", () => {
        render(
            <ReactVideoPlayer
                src="https://example.com/video.mp4"
                showDeviceToggle={false}
            />
        );
        expect(screen.queryByLabelText("Desktop view")).not.toBeInTheDocument();
    });

    it("renders a close button only when onClose is provided", () => {
        const { rerender } = render(
            <ReactVideoPlayer src="https://example.com/video.mp4" />
        );
        expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();

        const onClose = vi.fn();
        rerender(
            <ReactVideoPlayer
                src="https://example.com/video.mp4"
                onClose={onClose}
            />
        );
        const closeBtn = screen.getByLabelText("Close");
        fireEvent.click(closeBtn);
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("renders the play button when paused", () => {
        render(<ReactVideoPlayer src="https://example.com/video.mp4" />);
        expect(screen.getByLabelText("Play")).toBeInTheDocument();
    });

    it("shows the tooltip text on hover", () => {
        render(
            <ReactVideoPlayer
                src="https://example.com/video.mp4"
                tooltipText="Watch demo"
            />
        );
        const playBtn = screen.getByLabelText("Play");
        fireEvent.mouseEnter(playBtn);
        expect(screen.getByText("Watch demo")).toBeInTheDocument();
    });

    it("toggles device mode when the mobile button is clicked", () => {
        const { container } = render(
            <ReactVideoPlayer src="https://example.com/video.mp4" />
        );
        const root = container.querySelector(".gvp-root") as HTMLElement;
        expect(root.style.aspectRatio).toBe("16/9");

        fireEvent.click(screen.getByLabelText("Mobile view"));
        expect(root.style.aspectRatio).toBe("9/16");
    });

    it("uses custom aspect ratios when provided", () => {
        const { container } = render(
            <ReactVideoPlayer
                src="https://example.com/video.mp4"
                aspectRatio={{ desktop: "4/3", mobile: "1/1" }}
            />
        );
        const root = container.querySelector(".gvp-root") as HTMLElement;
        expect(root.style.aspectRatio).toBe("4/3");
    });
});
