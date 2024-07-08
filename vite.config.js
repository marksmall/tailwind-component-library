import * as path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'), // Specifies the entry point for building the library.
      name: '@mark-small/tailwind-component-library', // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'], // Defines external dependencies for Rollup bundling.
      // external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [react(), dts({ rollupTypes: true })], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Specifies alias for importing components.
    },
  },
  test: {
    globals: true, // Enables global testing for Vite.
    environment: 'jsdom', // Configures the test environment to run in a browser-like environment.
    setupFiles: './setupTests.ts', // Specifies the setup file for running tests.
    // setupFiles: [path.resolve(__dirname, './setupTests.ts')], // Specifies the setup file for running tests.
    include: ['src/**/*.test.{ts,tsx}'], // Specifies the files to be included for testing.
    exclude: ['node_modules/**'], // Specifies the files to be excluded from testing.
  },
});
