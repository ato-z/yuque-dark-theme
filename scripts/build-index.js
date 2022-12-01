const postcssPlugin = require('../plugin/postcss')

require('esbuild').build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    outfile: 'dist/scripts/content_scripts.js',
    plugins: [postcssPlugin],
}).catch(() => process.exit(1))