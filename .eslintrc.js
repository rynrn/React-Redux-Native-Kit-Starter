module.exports = {
    "env": {
        "react-native/react-native": true
    },
    "extends": ["eslint:recommended", "plugin:react-native/all"],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        // "react-native/no-inline-styles": 2,
        // "react-native/no-color-literals": 2,
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn",
        "strict": 0,
        "arrow-body-style": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};