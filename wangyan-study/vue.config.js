const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
    remUnit: 75  //基准大小 baseSize，需要和rem.js中单位rem值占
});
module.exports = {
    runtimeCompiler: true,
    lintOnSave: false,
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}