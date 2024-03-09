const { defineConfig } = require('@vue/cli-service')
var port = process.env.APP_ENV == 'local' ? process.env.PORT_LO : process.env.PORT_PRO
module.exports = defineConfig({
    devServer: {
        port: port,
    },
    transpileDependencies: true
})