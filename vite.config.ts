/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import checker from 'vite-plugin-checker';
// import tailwindcss from "tailwindcss";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 4200,
  //   host: 'localhost',
  // },
  plugins: [
    react(),
    // checker({ typescript: true }),
    // You can also disable type checking when running testing with Vitest
    !process.env.VITEST ? checker({ typescript: true }) : undefined,
    // tailwindcss()
    viteTsConfigPaths({
      root: "../../"
    })
  ],
  test: {
    globals: true,
    environment: "jsdom",
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], // <==
    setupFiles: "./src/tests/setup.ts"
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    // alias: {
    //   "~": path.resolve(__dirname, "src")
    // }
  }
});
