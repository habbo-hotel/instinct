const { override } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = config => {
    config.resolve.plugins.pop();
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    const tsRule = config.module.rules[2].oneOf[1];
    tsRule.include = undefined;
    tsRule.exclude = /node_modules/;

    return {
        ...config,
        ...addReactRefresh(),
    }
};