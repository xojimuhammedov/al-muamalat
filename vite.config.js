import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting and chunk optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'chakra-vendor': ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'ui-vendor': ['swiper', 'react-slick', 'react-owl-carousel', 'lucide-react'],
          'utils-vendor': ['axios', 'lodash', 'react-query', 'react-hook-form'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional, can disable for smaller builds)
    sourcemap: false,
    // Minify for production (esbuild is faster than terser)
    minify: 'esbuild',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@chakra-ui/react',
      'i18next',
      'react-i18next',
    ],
  },
})
