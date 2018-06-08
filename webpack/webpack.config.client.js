const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  entry: {
    description: './src/components/description/Description.jsx',
    descriptionOption: './src/components/description/DescriptionOptions.jsx',
    search: './src/components/search/Search.jsx',
    page: './src/components/pages/Page.jsx',
    filmPage: './src/components/pages/FilmPage.jsx',
    errorBoundary: './src/components/error-boundary/ErrorBoundary.jsx',
    notFoundPage: './src/components/error-boundary/NotFoundPage.jsx',
    filmDescription: './src/components/film-description/FilmDescription.jsx',
    filmList: './src/components/film-list/FilmList.jsx',
    filmListItem: './src/components/film-list/FilmListItem.jsx',
    footer: './src/components/footer/Footer.jsx',
    header: './src/components/header/Header.jsx',
    //
    configureStore: './src/modules/configureStore.js',
    films: './src/modules/films.js',
    reducer: './src/modules/reducer.js',

    main: [
      isDevMod && 'webpack-hot-middleware/client',
      './src/client.jsx',
    ].filter(Boolean),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[hash:5]',
            },
          },
        ],
      },
    ],
  },

  optimization: {
    noEmitOnErrors: true,

    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        },
        styles: {
          name: 'main',
          test: /\.s?css$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },

  plugins: [
    !isDevMod && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ].filter(Boolean),
});
