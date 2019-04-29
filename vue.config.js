module.exports = {
    css: {
        loaderOptions: {
          less: {
            // 这里的选项会传递给 css-loader
            javascriptEnabled: true
          }
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: '9999'
    },
}
