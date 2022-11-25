/** 打包扩建脚本 */
const shell = require('shelljs')
const path = require('path')

// 根目录
const root = path.resolve(path.join(__dirname, '../'))
// 源码目录
const src = path.join(root, 'src')
// 打包输出的文件夹
const outdir = path.join(root, 'dist')

shell.cd(root)
if (shell.cd(outdir).code === 1) shell.mkdir(outdir)
shell.rm('-rf', path.join(outdir,'*'))

const assets = path.join(outdir, 'assets')
shell.mkdir(assets)
shell.cp('-R', path.join(src, 'assets/icons'), assets)

shell.cp(path.join(root, 'manifest.json'), outdir)

shell.cd(root)
shell.exec('npm run build:popup')
shell.exec('npm run build:index')
