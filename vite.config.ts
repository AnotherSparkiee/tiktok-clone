import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // React и Tailwind обязательны для Make/Figma → не удаляй
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Алиас @ → src (уже хорошо)
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // Фикс ошибки "failed to resolve import react-dom/client"
      // Vercel/Netlify иногда не видит react-dom/client при бандлинге
      external: ['react-dom/client']
    }
  }
})
