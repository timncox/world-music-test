import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/.netlify/functions/auth': {
        target: process.env.NEXTAUTH_URL || 'http://localhost:3000',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/.netlify\/functions\/auth/, '/api/auth'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': {
      NEXTAUTH_URL: JSON.stringify(process.env.NEXTAUTH_URL),
      NEXTAUTH_SECRET: JSON.stringify(process.env.NEXTAUTH_SECRET),
      NEXT_PUBLIC_WLD_APP_ID: JSON.stringify(process.env.NEXT_PUBLIC_WLD_APP_ID),
      WLD_CLIENT_SECRET: JSON.stringify(process.env.WLD_CLIENT_SECRET),
    },
  },
})