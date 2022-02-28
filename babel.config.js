module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          allowUndefined: true,
          moduleName: 'react-native-dotenv',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            // assets
            '@assets': './src/assets',
            // components
            '@components': './src/components',
            // config
            '@config': './src/config',
            // containers
            '@containers': './src/containers',
            // i18n
            '@i18n': './src/i18n',
            // navigation
            '@navigation': './src/navigation',
            // scenes
            '@scenes': './src/scenes',
            // store
            '@store': './src/store',
            // types
            '@types': './src/types',
            // theme
            '@theme': './src/theme',
            // utils
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
