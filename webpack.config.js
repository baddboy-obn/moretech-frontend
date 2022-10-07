const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
  }),
];

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode,
  plugins,
  target,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                // If you are using less-loader@5 please spread the lessOptions to options directly
                modifyVars: {
                  '@primary-color': '#852CF5', // primary color
                  '@link-color': '#898989', // links color
                  '@success-color': '#2AD245', // success state color
                  '@warning-color': '#FCBD44', // warning state color
                  '@error-color': '#F34F4F', // error state color
                  '@font-size-base': '12px', // major text font size
                  '@heading-color': '#333333', // heading text color
                  '@text-color': '#121212', // major text color
                  '@text-color-secondary': '#C5C5C5', // secondary text color
                  '@disabled-color': '#898989', // disable state color
                  '@border-radius-base': '4px', // major border radius
                  '@border-color-base': '#F6F6F6', // major border color
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
};
