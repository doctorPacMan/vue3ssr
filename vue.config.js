const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

const cssOptions = {url: true, sourceMap: false, esModule: false};
const configExt = {
    module: {
        rules: [
            /*
            {
                test: /\.(png|jp?eg|gif|webp)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(a, b) {
                                console.log(a, b);
                                return 'img/[name].[hash].[ext]';
                            },
                            outputPath: 'img',
                            publicPath: `/img`,
                        },
                    },
                ],
            }
            */
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: './data/photo',
                to: '../html/data/photo',
            }
        ], []),
    ],
/*
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: cssOptions},
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: cssOptions},
                    {loader: 'less-loader', options: {lessOptions: {strictMath: true}}},
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
            chunkFilename: 'style/[name].[chunkhash].css',
            ignoreOrder: false,
        }),
    ],
*/
};

module.exports = {
    outputDir: './dist/client',
    publicPath: '/',
    runtimeCompiler: true,
    devServer: {
        contentBase: ['./static', './css', './js', './data'],
        contentBasePublicPath: ['/static', '/css', '/js', '/data'],
        https: false,
        port: 8080,
        writeToDisk: true
    },
    chainWebpack: (config) => {
        config.entryPoints.delete('app')

        if (!process.env.SSR) {
            config.entry('client').add('./src/entry.client.ts');
            return
        }
        config.entry('server').add('./src/entry.server.ts');

        config.target('node');
        config.output.libraryTarget('commonjs2');

        config.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }));

        config.plugin('manifest').use(new WebpackManifestPlugin({ fileName: 'ssr-manifest.json' }));

        config.optimization.splitChunks(false).minimize(false);

        config.plugins.delete('hmr');
        config.plugins.delete('html');
        config.plugins.delete('copy');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.plugins.delete('progress');
        config.plugins.delete('friendly-errors');
        config.plugins.delete('mini-css-extract-plugin');
    },
    configureWebpack: (config) => {
        return process.env.SSR ? {stats: {all: true}} : {...configExt};
    },
}

/*
const path = require('path');
const webpack = require('webpack');
const base = require('./base.config');
const {merge} = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PROD = base.mode === 'production';
const CLOUD = process.env.CLOUD_STATIC !== 'local';

const cssOptions = {url: true, sourceMap: !PROD, esModule: false};
module.exports = merge(base, {
    target: 'web',
    entry: {main: './src/entry-client.ts'},
    output: {
        publicPath: `${CLOUD ? process.env.CLOUD_STATIC_HOST : ''}${base.output.publicPath}`,
        filename: base.optimization.splitChunks ? undefined : '[name]~[fullhash:8].js',
        // чанки не работают, поскольку в tsconfig должно быть "module": "esnext"
        // chunkFilename: '[name].[fullhash:8].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: cssOptions},
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: cssOptions},
                    {loader: 'less-loader', options: {lessOptions: {strictMath: true}}},
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
            chunkFilename: 'style/[name].[chunkhash].css',
            ignoreOrder: false,
        }),
        new webpack.ProvidePlugin({Promise: 'es6-promise'}),
        new VueSSRClientPlugin(),
        new CopyPlugin({// копируем статику в билд
            patterns: [{
                from: './static',
                to: path.resolve(base.output.path, `../static`),
            }],
            options: {concurrency: 100},
        }),
    ]
});

*/