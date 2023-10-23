import type { RuleSetRule } from 'webpack';
export function buildLoaders(): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(?:js|mjs|cjs|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  const imgLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  return [babelLoader, typescriptLoader, fontsLoader, imgLoader, svgLoader];
}
