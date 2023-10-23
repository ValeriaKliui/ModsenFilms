import dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import type webpack from 'webpack';
import { Configuration, SourceMapDevToolPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { type BuildPaths } from './config/webpack/types';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  favicon: path.resolve(__dirname, 'public', 'logo.svg'),
};

const mode = 'development';
const isDev = mode === 'development';
const alias = {
  '@assets': path.resolve(__dirname, 'src', 'assets'),
  '@components': path.resolve(__dirname, 'src', 'components'),
  '@constants': path.resolve(__dirname, 'src', 'constants'),
  '@pages': path.resolve(__dirname, 'src', 'pages'),
  '@store': path.resolve(__dirname, 'src', 'store'),
  '@utils': path.resolve(__dirname, 'src', 'utils'),
  '@styles': path.resolve(__dirname, 'src', 'constants', 'styles'),
  '@hooks': path.resolve(__dirname, 'src', 'hooks'),
};

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev,
  alias,
});

export default config;
