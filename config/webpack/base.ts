import * as path from 'path'
import * as webpack from 'webpack'
import * as webpackMerge from 'webpack-merge'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import * as TerserPlugin from 'terser-webpack-plugin'

const baseConfig: webpack.Configuration = {
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // sync + async chunks
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules/,
        },
        commons: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
        },
      },
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true,
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          plugins: ["transform-react-jsx", '@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /external/,
            loader: 'file-loader',
            query: { name: 'static/[name].[ext]' },
          },
          {
            loader: '@svgr/webpack',
            query: {
              limit: 10000,
              name: 'static/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        oneOf: [
          {
            resource: /external/,
            loader: 'file-loader',
            query: { name: 'static/[name].[ext]' },
          },
          {
            loader: 'url-loader',
            query: {
              limit: 10000,
              name: 'static/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(sc|sa|c)ss/,
        use: [
          { loader: MiniCssExtractPlugin.loader }, {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        exclude: [
          /\.[jt]sx?$/,
          /\.css$/,
          /\.scss$/,
          /\.sass$/,
          /\.svg$/,
          /\.(jpe?g|png|gif)$/i,
          /\.json$/,
          /\.html/,
        ],
        loader: 'file-loader',
        query: { name: 'static/[name].[ext]' },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve('public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css'
    })
  ],
};

export default baseConfig;

export const merge = (...config: webpack.Configuration[]) => webpackMerge(baseConfig, ...config);
