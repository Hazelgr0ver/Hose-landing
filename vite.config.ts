import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  // Dev-сервер (npm run dev)
  server: {
    host: true, // слушать на всех интерфейсах, чтобы был доступ через проброс портов
    port: 80,
    // Разрешаем домены VS Code Dev Tunnels, иначе Vite блокирует чужой Host
    allowedHosts: ['.devtunnels.ms', '.euw.devtunnels.ms'],
  },
  // Просмотр собранной версии (npm run preview) — это и отдаём наружу
  preview: {
    host: true,
    port: 80,
    allowedHosts: ['.devtunnels.ms', '.euw.devtunnels.ms'],
  },
})
