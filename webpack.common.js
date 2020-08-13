const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            filename: 'nav.html',
            template: './src/pages/nav.html',
            chunks: ['noEntry']
        }),
        new HtmlWebpackPlugin({
            filename: 'standing.html',
            template: './src/pages/standing.html',
            chunks: ['noEntry']
        }),
        new WebpackPwaManifest({
            "name": "Football Pocket",
            "short_name": "FPocket",
            "description": "Free Football Apps",
            "start_url": ".",
            "display": "standalone",
            "background_color": "#f57c00",
            "theme_color": "#f57c00",
            "icons": [
                {
                    "src": "src/assets/icon/icon-48.png",
                    "sizes": "48x48",
                    "type": "image/png"
                },
                {
                    "src": "src/assets/icon/icon-96.png",
                    "sizes": "96x96",
                    "type": "image/png"
                },
                {
                    "src": "src/assets/icon/icon-192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                }
            ]
        }),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'src/script/sw.js')
        })
    ]
}