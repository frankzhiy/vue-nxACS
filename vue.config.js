const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0', // 可以被外部访问
    port: 7093, // 将端口改为8081
  },
  // devServer: {
  //   proxy: {
  //     '/predict': {
  //       target: 'http://localhost:8089',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/predict': '/predict'
  //       }
  //     }
  //   }
  // },
  transpileDependencies: true,
  //ESlint代码检查
  lintOnSave: false,
});
