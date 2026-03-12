import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [react(), dts({ insertTypesEntry: true })],
    build: {
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
            },
        },
    },
});
