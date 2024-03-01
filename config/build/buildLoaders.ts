import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack'
import { BuildOptions } from './types/config';

export function buildLoaders(options:BuildOptions):webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoaders =  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return  [
    typescriptLoader,
    cssLoaders,

  ];
}