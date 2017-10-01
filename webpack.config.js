const path = require("path");
const UglifyJSPuglin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dev = true; //process.env.NODE_ENV === "dev";

let appConfig = {
    port: 7004,
    host: "localhost"
};

let cssLoaders = [{
    loader: "css-loader",
    options: {
        importLoaders: 1,
        minimize: !dev
    }
}];

if (!dev) {
    cssLoaders.push({
        loader: 'postcss-loader',
        options: {
            sourceMap: 'inline',
            config: {
                path: './postcss.config.js'
            }
        }
    });
}

let config = {
    entry: {
        app: [
            "./front/scss/app.scss",
            "./front/main.js"
        ]
    },
    watch: dev,
    output: {
        path: path.resolve("./public/build"),
        filename: dev ? "[name].js" : "[name].[chunkhash:8].js",
        publicPath: (dev ? appConfig.host + ":" + appConfig.port : "") + "/build/"
    },
    devtool: "inline-source-map",
    devServer: {
        port: appConfig.port,
        historyApiFallback: true,
        noInfo: true,
        https: true,
        contentBase: path.resolve("./public/"),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            // {
            //     enforce: "pre",
            //     test: /\.(js|vue)$/,
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve('front')],
                use: ["babel-loader"]
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: cssLoaders
                })
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        ...cssLoaders,
                        "resolve-url-loader",
                        "sass-loader"
                    ]
                })
            },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "[name].[hash:8].[ext]"
                        }
                    },
                    {
                        loader: "img-loader",
                        options: {
                            enabled: !dev
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[hash:7].[ext]'
                }
            }
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: dev ? "[name].css" : "[name].[contenthash:8].css"
        }),
        new CopyWebpackPlugin([
            {
                from: './front/static/',
                to: 'static'
            }
        ]),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            Vue: ['vue/dist/vue.esm.js'],
            VueRouter: ["vue-router/dist/vue-router.esm"],
            VueResource: ["vue-resource/dist/vue-resource.es2015", 'default'],
            BootstrapVue: ["bootstrap-vue/dist/bootstrap-vue.esm"],
            Vuex: ["vuex/dist/vuex.esm", 'default'],
            "_": "lodash",
            "window._": "lodash"
        }),
        new CleanWebpackPlugin(["build"], {
            root: path.resolve("./public/"),
            verbose: true,
            dry: false
        })
    ]
};

if (!dev) {
    config.devtool = '#source-map';
    config.plugins.push(
        new UglifyJSPuglin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    );
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    );
    config.plugins.push(new ManifestPlugin());
}

module.exports = config;
