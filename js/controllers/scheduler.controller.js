"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observable = rxjs_1.interval(1000);
const subscription = observable.subscribe(x => console.log(x + 1));
setTimeout(() => { subscription.unsubscribe(); }, 5000);
