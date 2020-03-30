const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugni = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
	mode: 'development',
	optimization: {
		minimizer: [new OptimizeCssAssetsPlugin()]
	},
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				exclude: /styles\.css$/i,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /styles\.css$/i,
				loader: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					attributes: false,
					minimize: false
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				loader: 'file-loader',
				options: {
					esModule: false
				}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			ignoreOrder: false
		}),
		new CopyPlugni([{ from: 'src/assets', to: 'assets/' }])
	]
};
