const path = require("path");

let css_variables_path = "./src/styles/common/gaga/variables.scss";
// let proxyURL = 'http://localhost:9001'
if (process.env.VUE_APP_TYPE === "lh") {
  css_variables_path = "./src/styles/common/lh/variables.scss";
  // proxyURL = 'http://localhost:9002'
}
module.exports = {
  publicPath: "/",
  devServer: {
    // port: '9001',
    proxy: {
      "/": {
        // 线上老接口
        target: "http://172.16.1.69:8081", // 后台接口域名
        ws: false, //如果要代理 websocket，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        // pathRewrite: {
        //   "^/": "", // 替换
        // },
        historyApiFallback: true, // 开启单页应用
      },
      // "/pay": {
      //   // 线上老接口
      //   target: "https://www.lovehottie.com/", // 后台接口域名
      //   ws: false, //如果要代理 websocket，配置这个参数
      //   secure: true, // 如果是https接口，需要配置这个参数
      //   changeOrigin: true, //是否跨域
      //   pathRewrite: {
      //     "^/pay": "/pay", // 替换
      //   },
      //   historyApiFallback: true, // 开启单页应用
      // },
    },
  },
  outputDir: "buildPackage",
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // Provide path to the file with resources
          resources: [
            css_variables_path,
            "./src/styles/common/common.scss",
            // './src/assets/css/tailwind.css'
          ],

          // Or array of paths
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss', './path/to/functions.scss']
        })
        .end();
    });
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", path.resolve(__dirname, "src"))
      .set("@assets", path.resolve(__dirname, "src/assets"))
      .set("@images", path.resolve(__dirname, "./src/assets/images"))
      .set("@components", path.resolve(__dirname, "./src/components/"))
      .set("@styles", path.resolve(__dirname, "./src/styles/"))
      .set("@api", path.resolve(__dirname, "./src/api/"));
  },
};
