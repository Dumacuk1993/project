import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {buildEnv} from "./config/build/types/config";

export default (env: buildEnv) => {
  const mode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev,
    port: PORT,
  })

  return config
};