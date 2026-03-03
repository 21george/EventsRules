import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const rootDir = new URL('.', import.meta.url).pathname

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, '')

  return {
    // For sub-path deployments (e.g. GitHub Pages), set VITE_BASE to something like "/EventsRules/"
    base: env.VITE_BASE || '/',

    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': new URL('./src', import.meta.url).pathname,
      },
    },

    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5050',
          changeOrigin: true,
        },
      },
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
