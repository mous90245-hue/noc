import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    tanstackStart({
      client: { entry: 'main.tsx' },
      router: { entry: 'router.tsx' },
      server: { entry: 'server.ts' },
      start: { entry: 'start.ts' },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    cloudflare(),
  ],
})