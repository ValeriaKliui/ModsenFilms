import type { Configuration } from 'webpack';

import type { BuildOptions } from './types';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    devtool: isDev ? 'inline-source-map' : undefined,
    entry: {
      main: paths.entry,
    },
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(options),
  };
}
