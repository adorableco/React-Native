module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets', './node_modules/react-native-vector-icons'],

  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
}
