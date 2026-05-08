import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

/**
 * Preserve the "use client" directive at the top of any chunk that contains
 * React hooks. Required for Next.js App Router consumers.
 */
function preserveUseClient() {
    return {
        name: "preserve-use-client",
        renderChunk(code: string) {
            if (code.includes('"use client"') || code.includes("'use client'")) {
                return null;
            }
            return { code: `"use client";\n${code}`, map: null };
        },
    };
}

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            rollupTypes: true,
            include: ["src"],
            exclude: ["**/*.test.ts", "**/*.test.tsx"],
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: "src/index.ts",
            formats: ["es", "cjs"],
            fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime", "hls.js"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "ReactJsxRuntime",
                    "hls.js": "Hls",
                },
                plugins: [preserveUseClient()],
            },
        },
    },
});
