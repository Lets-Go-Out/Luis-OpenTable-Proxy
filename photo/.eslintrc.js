/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        //"react/destructuring-assignment": [(<enabled />), 'never'],
        "no-console": 0
    },
    "env": {
        "browser": true,
        "jest": true
    }
};
