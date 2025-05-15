import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000' // Fake CORS
    },
    host: true,            // bind op 0.0.0.0
    port: 5173,
    watch: {
      usePolling: true     // belangrijk in Docker voor file watching
    },
    strictPort: true,
    hmr: {
      clientPort: 5173,    // gebruik externe poort, niet 80 of 443
    }
  }
})
