import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index'),
      name: 'trex-wallet-sdk',
      formats: ['cjs'],
      fileName: `trex_wallet`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    dts({
      // @ts-ignore
      outputDir: 'dist/types',
      include: [
        'src/index.ts',
        'src/model/index.ts'
      ],
      rollupTypes: true,
    })
  ]
});
