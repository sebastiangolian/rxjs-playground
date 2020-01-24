export class Language {
    id: number;
    name: string;
    level: number;
 
    constructor(id: number, name: string, level: number ) {
       this.id = id
       this.name = name
       this.level = level
    }
 
    log(): void {
       console.log("Id is  :   " + this.id)
       console.log("Name is  :   " + this.name)
       console.log("Level is  :   " + this.level)
    }
 }