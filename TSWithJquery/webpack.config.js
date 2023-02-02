// webpack.config.js
module.exports = {
    entry: {
        home: './wwwroot/lib/ts/app.ts',
    },
    mode: 'production',
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['latest', { modules: false }],
                    ],
                },
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude:/node-modules/
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot/js')
    },
};