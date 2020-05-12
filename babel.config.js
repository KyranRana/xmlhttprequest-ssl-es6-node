// babel.config.js
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current",
                },
            },
        ],
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
              "absoluteRuntime": false,
              "corejs": 2,
              "helpers": true,
              "regenerator": true,
              "useESModules": false,
              "version": "7.0.0-beta.0"
            }
        ]
    ]
};