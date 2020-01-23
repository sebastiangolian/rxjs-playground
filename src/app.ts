import { Device } from "device";

console.log('-------------------------------')
console.log('----- RUN rxjs-playground -----')
console.log('-------------------------------')

var cp = require('child_process');
cp.fork('js/app-1')

let device:Device = new Device('device 1',100) 
console.log(device.disp())


console.log('-------------------------------')
console.log('----- END rxjs-playground -----')
console.log('-------------------------------')
