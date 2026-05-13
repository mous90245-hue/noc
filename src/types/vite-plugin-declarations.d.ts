import type { Plugin } from "vite";

declare module "@cloudflare/vite-plugin" {
  export function cloudflare(): Plugin;
}

declare module "@tanstack/react-start/plugin/vite" {
  export function tanstackStart(): Plugin[];
}
