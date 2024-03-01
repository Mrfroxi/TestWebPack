import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import {Configuration}  from 'webpack'

export function buildWebpackConfig(options:BuildOptions):Configuration{

    const {paths,mode,isDev} = options;

    return {
  
        mode: mode,
      
        entry: paths.entry,
        
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean:true,
        },
      
        plugins: buildPlugins(options),
      
        module: {
            rules: buildLoaders(),
          },
      
        resolve: buildResolvers(),

        devServer: isDev ? buildDevServer(options) : undefined,
  
        ///to track where an error occurred in the file, since webpack compresses everything
        devtool: isDev ? 'inline-source-map' : undefined,
      }
      
}