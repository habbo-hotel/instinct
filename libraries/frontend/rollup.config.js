import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import bundleScss from 'rollup-plugin-bundle-scss';
import localResolve from 'rollup-plugin-local-resolve';

const INPUT_FILE_PATH = 'src/index.ts';
const OUTPUT_NAME = 'Example';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const PLUGINS = [
  typescript(),
  bundleScss(),
  localResolve(),
  resolve({
    browser: true,
  }),
  commonjs(),
  filesize(),
];

const EXTERNAL = ['react', 'react-dom', 'react-is', 'react-router-dom', 'instinct-interfaces'];

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
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: EXTERNAL,
  plugins: PLUGINS,
}));

export default config;
