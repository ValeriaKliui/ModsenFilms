import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { SourceMapDevToolPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

interface BuildEnv {
  mode: 'development' | 'production';
  port: number;
}

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = env.mode === 'development';
  const alias = {
    '@assets': path.resolve(__dirname, 'src', 'assets'),
    '@components': path.resolve(__dirname, 'src', 'components'),
    '@constants': path.resolve(__dirname, 'src', 'constants'),
    '@pages': path.resolve(__dirname, 'src', 'pages'),
    '@store': path.resolve(__dirname, 'src', 'store'),
    '@utils': path.resolve(__dirname, 'src', 'utils'),
    '@styles': path.resolve(__dirname, 'src', 'constants', 'styles'),
    '@hooks': path.resolve(__dirname, 'src', 'utils', 'hooks'),
  };

  const config = {
    mode,
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
        favicon: path.resolve(__dirname, 'public', 'logo.svg'),
      }),
      new webpack.ProgressPlugin(),
      new SourceMapDevToolPlugin({
        filename: '[file].map',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
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
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.m?js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    },
    resolve: {
      alias,
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev
      ? {
          static: './dist',
        }
      : undefined,
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
  return config;
};
