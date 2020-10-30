import image from '@rollup/plugin-image';
import adminPackage from './package.json';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
  input: "src/index.ts",
  output: [
    {
      file: adminPackage.main,
      format: "cjs",
      sourcemap: false,
    },
    {
      file: adminPackage.module,
      format: "esm",
      sourcemap: false,
    }
  ],
  plugins: [
      // Prevents peer dependencies from being bundled
      blockPeerDependencies(),

      // Resolves node_module dependencies and bundles them
      resolveDependencies(),

      // Transpile and bundle Typescript
      typescript({
          sourceMap: false,
          include: [
              './src/*',
              '../**/src/*',
          ]
      }),

      // Bundle into CommonJS format
      commonJS({
        sourceMap: false,
      }),

      // Bundle CSS and SASS files
      postcss(),

      // Bundle image files
      image(),

      // Minify final bundle size
      terser(),
  ]
};
//
// const config = OUTPUT_DATA.map(({ file, format }) => ({
//   input: 'src/index.ts',
//   output: {
//     file,
//     format,
//     name: 'InstinctFrontend',
//     globals: {
//       'react': 'React',
//       'react-dom': 'ReactDOM'
//     },
//   },
//   external: [
//     'react',
//     'react-dom',
//   ],
//   plugins: [
//     css({ output: 'bundle.css' }),
//     bundleScss({ output: 'admin.css' }),
//     typescript(),
//     // babel({
//     //   exclude: 'node_modules/**',
//     //   extensions: [
//     //     '.ts',
//     //     '.tsx'
//     //   ],
//     //   include: [
//     //     '../src/**/*.ts',
//     //     '../src/**/*.tsx',
//     //   ]
//     // }),
//     // commonjs({
//     //   sourceMap: false,
//     // }),
//     // localResolve(),
//     // resolve({
//     //   browser: true,
//     // }),
//     // filesize(),
//   ]
// }));
//
// export default config;