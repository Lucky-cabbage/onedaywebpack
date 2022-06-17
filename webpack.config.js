const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: "./src/main.js", // 入口
    output: {
        path: path.join(__dirname, "dist"), // 出口路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: (__dirname, './public/index.html'),
        })
    ],
    devServer: {
        port: 33333, // 端口号
        open: true
    }
}