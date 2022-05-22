module.exports = {
    devServer: {
        Proxy: {
            '/api': {
                target: 'http://tingapi.ting.baidu.com',
                cahngeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}