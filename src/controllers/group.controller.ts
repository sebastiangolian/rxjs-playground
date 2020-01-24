import { of } from 'rxjs';
import { groupBy,mergeMap,reduce,map } from 'rxjs/operators';
import { Language } from "../models/language.model.js";
of(
    new Language(1,'JavaScript',1),
    new Language(2,'Parcel',3),
    new Language(3,'PHP',1),
    new Language(4,'C#',2),
    new Language(5,'Typescript',1)
).pipe(
    groupBy(l => l.level),
    mergeMap((group:any) =>
	    group.pipe(reduce((acc, cur) => [...acc, cur], [group.key]))
    ),
    map((arr:any) => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
).subscribe(console.log)