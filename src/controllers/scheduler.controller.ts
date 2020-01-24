import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x+1));

setTimeout(() => {subscription.unsubscribe()}, 5000);