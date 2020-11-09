import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import cerberusPackage from './package.json';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      sourcemap: false,
    },
  ],
  plugins: [
    // Prevents peer dependencies from being bundled
    blockPeerDependencies(),

    // Resolves node_module dependencies and bundles them
    resolveDependencies({
      preferBuiltins: true,
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

    babel({
      exclude: 'node_modules/**',
      include: 'src/**/*',
      minified: true,
      comments: false,
      presets: ['@babel/preset-env', '@babel/plugin-transform-runtime'],
    }),

    // Minimize final bundle
    terser({
      compress: true,
      output: {
        comments: false,
      },
    }),
  ],
  external: [
    ...Object.keys(cerberusPackage.dependencies || {}),
    ...Object.keys(cerberusPackage.peerDependencies || {}),
  ],
};
