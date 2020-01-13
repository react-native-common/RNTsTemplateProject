module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src/',
          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', 'tsx'],
        },
      },
    ],
  ],
};
