module.exports = {
    "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "/__tests__/.*\\.spec\\.(tsx?|jsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "json",
        "jsx"
    ],
    "testEnvironment": "node",
    "verbose": true
};