const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.module.rules.push({
    test: /\.(jsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        query: {
          plugins: ["transform-react-jsx", '@babel/plugin-proposal-class-properties']
        }
      },
    ]
  })
  config.module.rules.push({
    test: /\.(svg)$/i,
    oneOf: [
      {
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
  })
  config.module.rules.push({
    test: /\.(jpe?g|png|gif)$/i,
    oneOf: [
      {
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
  })
  config.module.rules.push({
    test: /\.(eot|woff|woff2|ttf)$/,
    use: [
      {
        loader: require.resolve('url-loader'),
      },
    ]
  })
  config.module.rules.push({
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
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css'
    })
  )
  return config
};
