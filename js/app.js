"use strict";
var cp = require('child_process');
console.log('-------------------------------');
console.log('------- rxjs-playground -------');
console.log('-------------------------------');
cp.fork('js/controllers/device.controller');
cp.fork('js/controllers/user.controller');
