import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                @import "./src/app/styles/_variables.scss";
                @import "./src/app/styles/_mixins.scss";
            `
      }
    }
  },
  plugins: [react()]
});
