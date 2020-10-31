import image from '@rollup/plugin-image';
import adminPackage from './package.json';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
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
            baseUrl: './src',
            sourceMap: false,
            include: [
                '../**/src/*',
            ],
            jsx: 'preserve',
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
    ],
    external: id => Object.keys(adminPackage.dependencies).includes(id)
};
