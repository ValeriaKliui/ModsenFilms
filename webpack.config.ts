import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { SourceMapDevToolPlugin } from 'webpack';
import webpackDevServer from 'webpack-dev-server';

interface BuildEnv {
  mode: 'development' | 'production';
  port: number;
}

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = env.mode === 'development';

  const config = {
    mode: mode,
    entry: {
      main: path.resolve(__dirname, 'src', 'index.tsx'),
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.ProgressPlugin(),
      new SourceMapDevToolPlugin({
        filename: '[file].map',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: path.join('icons', '[name].[contenthash][ext]'),
          },
        },
        {
          test: /\.m?js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev
      ? {
          static: './dist',
        }
      : undefined,
    optimization: {
      runtimeChunk: 'single',
    },
  };
  return config;
};
