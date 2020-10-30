import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import bundleScss from 'rollup-plugin-bundle-scss';
import localResolve from 'rollup-plugin-local-resolve';

const INPUT_FILE_PATH = 'src/index.ts';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const PLUGINS = [
  commonjs(),
  typescript(),
  bundleScss(),
  babel({
    exclude: 'node_modules/**',
    extensions: [
      '.ts',
      '.tsx'
    ]
  }),
  localResolve(),
  resolve({
    browser: true,
  }),
  commonjs(),
  filesize(),
];

const EXTERNAL = [
  'react',
  'react-dom',
];

const OUTPUT_DATA = [
  {
    file: './build/index.js',
    format: 'cjs',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: 'InstinctFrontend',
    globals: GLOBALS,
  },
  external: EXTERNAL,
  plugins: PLUGINS,
}));

export default config;
