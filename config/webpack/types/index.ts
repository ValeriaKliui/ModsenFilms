export type BuildMode = 'development' | 'production';
export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  favicon: string;
}
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  alias: Record<string, string>;
}
export interface BuildEnv {
  mode: BuildMode;
}
