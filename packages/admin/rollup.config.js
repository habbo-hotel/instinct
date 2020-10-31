import jsx from 'acorn-jsx';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';
import frontendPackage from './package.json';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
    inlineDynamicImports: true,
    preserveModules: false,
    input: "src/index.ts",
    output: [
        {
            file: frontendPackage.main,
            format: "cjs",
            sourcemap: false,
        },
        {
            file: frontendPackage.module,
            format: "esm",
            sourcemap: false,
        }
    ],
    acornInjectPlugins: [jsx()],
    plugins: [
        // Prevents peer dependencies from being bundled
        blockPeerDependencies(),

        // Resolves node_module dependencies and bundles them
        resolveDependencies({
            browser: true,
            preferBuiltins: true,
        }),

        // Bundle CSS and SASS files
        scss({
            output: './build/admin.css',
            failOnError: true,
        }),

        // Bundle image files
        image(),

        // Bundle into CommonJS format
        commonJS({
            sourceMap: false,
        }),

        // Transpile and bundle Typescript
        typescript({
            tsconfig: './tsconfig.build.json',
        }),
    ],
    external: id => Object.keys(frontendPackage.dependencies).includes(id)
};
