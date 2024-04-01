const { defineConfig } = require('@vue/cli-service')
var port = process.env.NODE_ENV == 'development' ? process.env.VUE_APP_PORT_DEV : process.env.VUE_APP_PORT_PRODUCT
module.exports = defineConfig({
    devServer: {
        port: port,
    },
    transpileDependencies: true
})