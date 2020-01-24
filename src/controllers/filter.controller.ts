import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Language } from "../models/language.model.js";
of(
    new Language(1,'JavaScript',1),
    new Language(2,'Parcel',3),
    new Language(3,'PHP',1),
    new Language(4,'C#',2),
    new Language(5,'Typescript',1)
).pipe(
    filter(object => object.id > 2)
).subscribe(console.log)