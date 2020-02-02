module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^demo(.*)$': '<rootDir>/demo$1',
    '^componnt(.*)$': '<rootDir>/component$1',
  },
  setupFiles: [
    './jestsetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
