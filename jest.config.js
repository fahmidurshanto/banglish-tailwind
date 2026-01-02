module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.js'],
    collectCoverageFrom: [
        'src/**/*.{ts,js}',
        '!src/cli.js', // Exclude CLI file from coverage
    ],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
    },
};