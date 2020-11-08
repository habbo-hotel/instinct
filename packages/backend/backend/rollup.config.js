import jsx from 'acorn-jsx';
import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';
import frontendPackage from './package.json';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
  preserveModules: false,
  input: "./src/main.ts",
  output: [
    {
      dir: './dist',
      format: "cjs",
      sourcemap: false,
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    // Prevents peer dependencies from being bundled
    blockPeerDependencies(),

    // Resolves node_module dependencies and bundles them
    resolveDependencies({
      browser: true,
      preferBuiltins: false,
    }),

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
    }),

    // Minimize final bundle
    terser(),
  ],
  external: id => {
    console.log(id);
    return Object.keys(frontendPackage.dependencies).includes(id)
  }
};
