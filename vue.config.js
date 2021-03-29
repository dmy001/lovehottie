const path = require('path')

let css_variables_path = './src/assets/css/common/gaga/variables.scss'
let css_common_path = './src/assets/css/common/gaga/common.scss'
if(process.env.VUE_APP_TYPE === 'lh'){
  css_variables_path = './src/assets/css/common/lh/variables.scss'
  css_common_path = './src/assets/css/common/lh/common.scss'
}
module.exports = {

  publicPath: '/',
  outputDir: 'buildPackage',
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: [
                        css_variables_path,
                        css_common_path,

          ]
 
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
      .set('@components', path.resolve(__dirname, './src/components/'))
      .set('@imagesuri', path.resolve('','https://sources.gagahi.com'))
  }
}