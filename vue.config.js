const path = require('path')
module.exports = {

  publicPath: '/test',
  outputDir: 'buildPackage',
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/assets/css/common/variables.scss',
 
          // Or array of paths
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss', './path/to/functions.scss']
        })
        .end()
    })
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@src', path.resolve(__dirname, 'src'))
      .set('@assets', path.resolve(__dirname, 'src/assets'))
      .set('@images', path.resolve(__dirname, './src/assets/images'))
  }
}