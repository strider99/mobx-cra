### Instructions to install this repository

- clone this repository and do `npm install`

### General instructions for installing mobx with create-react-app
 - `npm install -D @babel/plugin-proposal-decorators`
 - `npm install -D @babel/plugin-proposal-class-properties`
 - Then eject out of create-react-app with `npm run eject`
 - Now in the package.json, to the babel config add the following
 ```
 {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
  }
  ```
  - Make sure the decorators and class-properties are in the same order as above.