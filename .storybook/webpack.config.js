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
  });
  config.module.rules.push({
    test: /\.(jsx)$/,
    include: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        query: {
          plugins: ["transform-react-jsx", '@babel/plugin-proposal-class-properties']
        }
      },
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};