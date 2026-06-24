import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Repo is hgclay.github.io (a GitHub user/org Pages repo), so it deploys
// at the domain root and the Vite base path stays "/".
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
