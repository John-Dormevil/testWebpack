const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const dev = process.env.NODE_ENV === "dev"

let config = {
    entry: ["babel-polyfill",'./assets/js/app.js'],
    watch: dev,
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [],
    devtool: dev ? 'cheap-module-eval-source-map' : 'source-map'
}

if (!dev){
    config.plugins.push(new UglifyJSPlugin({
        sourceMap: true
    }))
}
module.exports = config
