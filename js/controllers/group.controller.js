"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const language_model_js_1 = require("../models/language.model.js");
rxjs_1.of(new language_model_js_1.Language(1, 'JavaScript', 1), new language_model_js_1.Language(2, 'Parcel', 3), new language_model_js_1.Language(3, 'PHP', 1), new language_model_js_1.Language(4, 'C#', 2), new language_model_js_1.Language(5, 'Typescript', 1)).pipe(operators_1.groupBy(l => l.level), operators_1.mergeMap((group) => group.pipe(operators_1.reduce((acc, cur) => [...acc, cur], [group.key]))), operators_1.map((arr) => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))).subscribe(console.log);
