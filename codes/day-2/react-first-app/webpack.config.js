const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigObj = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),
        app: path.resolve(__dirname, 'src', 'App.js'),
        description: path.resolve(__dirname, 'src', 'DescriptionComp.js'),
        header: path.resolve(__dirname, 'src', 'HeaderComp.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 4000
    }
}
module.exports = webpackConfigObj //will be supplied to webpack.js file 