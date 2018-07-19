module.exports = {
  "env": {
    "build": {
      "presets": [
        ["@babel/preset-env", {
          "targets": {
            "node": "8.11"
          }
        }]
      ],
      "plugins": [
        "external-helpers",
        ["transform-runtime", {
          "polyfill": false,
          "regenerator": true
        }]
      ]
    }
  }
}
