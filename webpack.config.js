const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建一个插件的实例对象
const htmlplugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"),  //源文件
    filename: "index.html" //生成的内存中首页的名称
})

const VueloaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode: "development",
    plugins: [htmlplugin,new VueloaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: ['url-loader?limit=317629'] },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.vue$/, use: ['vue-loader'] }
        ]
    }
}