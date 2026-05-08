import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// hls.js touches `MediaSource` which jsdom doesn't implement.
// Stub it as unsupported so the player falls through to the native path.
vi.mock("hls.js", () => {
    class HlsMock {
        static isSupported() {
            return false;
        }
        static Events = { ERROR: "hlsError" };
        attachMedia() {}
        loadSource() {}
        on() {}
        destroy() {}
    }
    return { default: HlsMock };
});

// jsdom HTMLMediaElement methods are stubs that throw — replace with no-ops.
Object.defineProperty(HTMLMediaElement.prototype, "play", {
    configurable: true,
    value: vi.fn().mockResolvedValue(undefined),
});
Object.defineProperty(HTMLMediaElement.prototype, "pause", {
    configurable: true,
    value: vi.fn(),
});
Object.defineProperty(HTMLMediaElement.prototype, "load", {
    configurable: true,
    value: vi.fn(),
});
