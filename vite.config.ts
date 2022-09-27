import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths({ projects: ['tsconfig.paths.json'] })],
  server: {
    port: 3000,
    host: 'localhost',
  },
});
