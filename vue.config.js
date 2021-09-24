const path = require('path');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const nodeExternals = require('webpack-node-externals');

const BASE_URL = '/';
const configExt = {
    module: {
        rules: [
            {
                test: /\.(png|jp?eg|jfif|gif|webp)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'img/[name].[hash].[ext]',
                            outputPath: 'img',
                            publicPath: `/img`,
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BASE_URL': JSON.stringify(BASE_URL),
        }),
    ],
    resolve: {
        symlinks: true,
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
};

module.exports = {
    runtimeCompiler: true,
    outputDir: './dist/client',
    publicPath: process.env.SSR ? '/' : BASE_URL,
    devServer: {
        contentBase: ['./src/assets', './css', './js', './data'],
        contentBasePublicPath: ['/assets', '/css', '/js', '/data'],
        historyApiFallback: true,
        https: false,
        port: 8080,
        writeToDisk: true
    },
    chainWebpack: (config) => {
        config.entryPoints.delete('app');

        if (!process.env.SSR) return config.entry('client').add('./src/entry.client.ts');

        config.entry('server').add('./src/entry.server.ts');

        config.target('node');
        config.output.libraryTarget('commonjs2');

        config.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }));

        config.plugin('manifest').use(new WebpackManifestPlugin({ fileName: 'ssr-manifest.json' }));

        config.optimization.splitChunks(false).minimize(false);

        config.plugins.delete('hmr');
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.plugins.delete('progress');
        config.plugins.delete('mini-css-extract-plugin');
        config.plugins.delete('friendly-errors');
    },
    configureWebpack: (config) => {
        return !process.env.SSR ? {...configExt} : {
            stats: {all: true},
            module: {
                rules: [
                    {test: /\.css$/i, loader: 'null-loader'},
                    {test: /\.less$/i, loader: 'null-loader'},
                ]
            },
        };
    },
}
