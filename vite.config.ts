import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  css: {
    postcss: {
      map: {
        inline: false,
        annotation: true,
        sourcesContent: true,
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@tecnomadas/react-ui",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        manualChunks: {
          input: ["./src/atoms/input/index.ts"],
        },
        entryFileNames: "[name]-[hash].js",
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
  resolve: {},
});
