import path from 'path';
import type { ResolveOptions } from 'webpack';
import { BuildOptions } from './types';
export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { alias } = options;

  return {
    alias,
    extensions: ['.tsx', '.ts', '.js'],
  };
}
