import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': 'http://localhost:5000',
      '/models': 'http://localhost:5000',
      '/users': 'http://localhost:5000',
      '/conversations': 'http://localhost:5000',
      '/analytics': 'http://localhost:5000'
    }
  }
});
