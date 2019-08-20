const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode:'production',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /.vue$/,
				use: [
					'vue-loader',
					'vue-style-loader',
					'css-loader',
					
					]
			},
			// {
			// 	test: /.css$/,
			// 	use: [
			// 		'css-loader',
			// 		'vue-style-loader',
			// 		]
			// }
		]
	}
}