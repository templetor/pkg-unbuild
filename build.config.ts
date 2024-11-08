import path from 'node:path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  failOnWarn: false,
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  entries: ['src/main.ts'],
  rollup: {
    output: {
      format: 'iife',
    },
    esbuild: {
      globalName: 'ph_globalName',
      minify: true,
    },
  },
})
