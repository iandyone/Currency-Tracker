import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types';
import dotenv from 'dotenv';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths } = options;
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce(
    (prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    },
    {} as Record<string, string>,
  );

  return [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),

    new webpack.DefinePlugin(envKeys),
  ];
}
