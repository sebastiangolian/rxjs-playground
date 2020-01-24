"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Language {
    constructor(id, name, level) {
        this.id = id;
        this.name = name;
        this.level = level;
    }
    log() {
        console.log("Id is  :   " + this.id);
        console.log("Name is  :   " + this.name);
        console.log("Level is  :   " + this.level);
    }
}
exports.Language = Language;
