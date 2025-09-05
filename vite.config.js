import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000, // Default port
    open: true, // Automatically open the browser
    strictPort: true, // Prevent Vite from trying other ports
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-dev-runtime', 'react/jsx-runtime']
  }
});