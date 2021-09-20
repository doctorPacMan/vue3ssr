const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const nodeExternals = require('webpack-node-externals');

const configExt = {
    module: {
        rules: [
            {
                test: /\.(png|jp?eg|gif|webp)(\?.*)?$/,
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
    plugins: [],
    resolve: {
        symlinks: true,
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
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
        contentBase: ['./src/assets', './css', './js', './data'],
        contentBasePublicPath: ['/assets', '/css', '/js', '/data'],
        historyApiFallback: true,
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
