const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
  };

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

let entryHmtl = 'src/pages/uiKit/formElements/formElements.pug'
// 'src/pages/uiKit/formElements/formElements.pug'
// 'src/samples/uiKit/uiKit.pug'

console.log(mode + ' mode')

module.exports = {
    watch: true,
    mode: mode,
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean:true,
    },
    devtool: 'eval-source-map',
    optimization: {
        splitChunks: {
            chunks:'all'
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
          },
     
      },
     
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
          }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin( {
        template: entryHmtl
    } ),
    new CleanWebpackPlugin(),
 ],
    module: {
        
        rules: [
            {
                test:  /\.html$/i,
                loader: 'html-loader',
                },
            {
            test: /\.(sa|sc|c)ss$/,
            use: [
                (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader, 
                "css-loader",
                {loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          [
                            "postcss-preset-env",
                            {
                              // Options
                            },
                          ],
                        ],
                      },
                    },
                  },
                "sass-loader"
            ],
            },
            {
            test:  /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            
            },
            {
                test:  /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test:  /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower-components)/,
            },
            {
                test:  /\.m?js$/,
                exclude: /(node_modules|bower-components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
    
        ],
    },
}