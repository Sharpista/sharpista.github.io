import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path compatible com GitHub Pages:
// - Repositório do usuário (Sharpista.github.io) => base '/'
// - Qualquer outro repositório (definido em CI via GITHUB_REPOSITORY) => base '/<nome-do-repo>/'
// - Pode ser sobrescrito através da variável de ambiente BASE_PATH.
function resolveBasePath(): string {
  const override = process.env.BASE_PATH?.trim()
  if (override) return override
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  if (repo && !repo.toLowerCase().endsWith('.github.io')) {
    return `/${repo}/`
  }
  return '/'
}

export default defineConfig(() => ({
  plugins: [react()],
  base: resolveBasePath(),
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
}))
