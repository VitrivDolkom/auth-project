export default {
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }]
  },
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/\\.*/', '<rootDir>/types/']
};
