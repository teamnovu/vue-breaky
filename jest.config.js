module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue'
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest'
  },
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
