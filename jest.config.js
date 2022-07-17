module.exports = {
    moduleFileExtensions: ["js", "jsx"],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/tools/mocks/style.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tools/mocks/file.js',
    },
    testRegex: '__tests__/.*\\.spec\\.js$',
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "./setupTest.js"
    ],
    collectCoverageFrom: [
        'src/js/**/*.{js,jsx}',
    ],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
};