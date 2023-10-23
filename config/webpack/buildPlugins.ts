import dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {
  DefinePlugin,
  ProgressPlugin,
  SourceMapDevToolPlugin,
  type WebpackPluginInstance,
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions, BuildPaths } from './types';

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),
    new ProgressPlugin(),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new dotenv(),
  ];
}
