var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            { 
                test: /\.js$/, exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                } 
            }
        ]
    }

    // module: {
    //     rules: [{ 
    //         test: /\.js$/, 
    //         exclude: /node_modules/, 
    //         // use: {
    //         //     loader: 'babel-loader',
    //         //     options: {
    //         //         //↓JSX構文を使ったjsファイルを読み込むためのpresetsを追加する
    //         //         presets: [
    //         //             '@babel/preset-react' //ここにpresetを追加
    //         //         ],
    //         //     }
    //         // },
    //         use: 'raw-loader'
    //     }]
    // }

    // module: {
    //     rules: [
    //         // test = loaderを使う特定の拡張子を指定
    //         // use = testで指定した拡張子にloaderを使いwebpackが読み込めるようにする
    //         {
    //             test: /\.css$/,
    //             use: ["style-loader", "css-loader"],
    //             //↑公式docによると、上記2つのloaderを追加すればCSSが読めるらしい
    //         },
    //         {
    //             test: /\.js$/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     //↓JSX構文を使ったjsファイルを読み込むためのpresetsを追加する
    //                     presets: [
    //                         '@babel/preset-react' //ここにpresetを追加
    //                     ],
    //                 }
    //             },
    //         },
    //     ],
    // }
};