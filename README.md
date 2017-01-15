# teo-body-parser
Teo.JS body parser based on Express.js [body-parser](https://github.com/expressjs/body-parser) module.

This module provides support for all of the wrapped API:
  * [JSON body parser](https://github.com/expressjs/body-parser#bodyparserjsonoptions)
  * [Raw body parser](https://github.com/expressjs/body-parser#bodyparserrawoptions)
  * [Text body parser](https://github.com/expressjs/body-parser#bodyparsertextoptions)  
  * [URL-encoded form body parser](https://github.com/expressjs/body-parser#bodyparserurlencodedoptions)
  
## Teo.JS Config Example
```javascript
module.exports = {
    protocol: "http",
    host: "localhost",
    port: 3100,
    cluster: {
        enabled: true
    },
    extensions: [
        {
            name: "body-parser",
            module: "teo-body-parser",
            config: {
             // enables all parsers
             json: true,
             urlencoded: true,
             raw: true,
             text: true
            }
        }
    ],
};
```
