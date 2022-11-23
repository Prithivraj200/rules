const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        "index": { import: './src/rules.ts', filename: '[name].js' },
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: [/\.min\.js$/, 'index'],
            uglifyOptions: {
                compress: {
                    drop_console: true,
                }
            }
        })]
    },
    output: {
        path: path.resolve(__dirname, 'lib/'),
    }
};