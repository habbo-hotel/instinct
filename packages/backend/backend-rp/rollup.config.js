import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import backendRoleplayPackage from './package.json';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
  input: "./src/index.ts",
  output: [
    {
      file: './dist/index.js',
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [
    // Prevents peer dependencies from being bundled
    blockPeerDependencies(),

    // Resolves node_module dependencies and bundles them
    resolveDependencies(),

    // Convert JSON into ES Modules
    json({
      compact: true,
    }),

    // Typescript compilation
    typescript({
      rootDir: './src',
      tsconfig: './tsconfig.build.json',
    }),

    // Bundle into CommonJS format
    commonJS({
      sourceMap: false,
      exclude: ['node_modules']
    }),

    // Minimize final bundle
    terser({
      compress: true,
      output: {
        comments: false,
      },
    }),
  ],
  external: id => {
    console.log(id);
    return Object.keys(backendRoleplayPackage.dependencies).includes(id)
  }
};
