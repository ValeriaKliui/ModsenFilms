import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

interface BuildEnv {
  mode: "development" | "production";
  port: number;
}

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
    mode: mode,
    entry: {
      main: path.resolve(__dirname, "src", "index.tsx"),
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev
      ? {
          static: "./dist",
        }
      : undefined,
    optimization: {
      runtimeChunk: "single",
    },
  };
  return config;
};
