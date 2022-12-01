const fs = require('fs')
const path = require('path')

const postcss = require('postcss')
const minify = require('postcss-minify')
const autoprefixer = require('autoprefixer')

const render = async (file) => {
    const fileName = path.resolve(__dirname, '../src', file)
    const ctx = fs.readFileSync(fileName, { encoding: 'utf8' })
    const { css } = await postcss([minify, autoprefixer]).process(ctx, { from: file })
    return css
}

module.exports = {
    name: 'postcss-plugin',
    setup(build) {
      build.onResolve({ filter: /\.css$/ }, args => ({
        path: args.path,
        namespace: 'postcss-space',
      }))
  
        build.onLoad({ filter: /.css/, namespace: 'postcss-space' }, async (result) => {
            const contents = await render(result.path)
            return ({
                contents: contents,
                loader: 'text',
            })
        })
    },
}