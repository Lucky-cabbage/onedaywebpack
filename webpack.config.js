

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { type } = require('os')
const { join } = require("path")
module.exports = {
    mode: 'production',

    entry: "./src/main.js", // 入口
    output: {
        path: join(__dirname, "lib"), // 出口路径
        filename: 'webpack-demo.js',
        // 删除上次的文件夹再打包
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, './public/index.html'),
        })
    ],
    devServer: {
        port: 33333, // 端口号
        open: true
    },
    module: {
        rules: [ // loader的规则
            {
                test: /\.css$/i, // 匹配所有的css文件
                // use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.(png|gif|jpeg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // 单位 字节
                        maxSize: 21 * 1024
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                // [hash]  随意生成字符 :6 6个字符  [ext] 原文件的后缀名不变
                generator: {
                    filename: 'fonts/[hash:6][ext]'
                }
            },
            {
                test: /\.js$/i,
                /*   loader: "babel-loader",
                  options: {
                      pressts: ['@babel/preset-env']
                  } */
                use: ["babel-loader"]
            }
        ]
    }
}