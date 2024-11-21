/**
 *  hello world
 *  */ 

// import { fromEvent, throttleTime } from 'rxjs';

// const observable = fromEvent(document, 'click');
// console.log(observable)

// const observer = fromEvent(document, 'click')
//   .pipe(throttleTime(1000))
//   .subscribe(() => console.log('Clicked!'));

// console.log(observer)


/***
 * Observable 对象
 * 
 */

// import { Observable } from 'rxjs'
// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000)
// })

// console.log('before')
// observable.subscribe({
//   next(x){
//     console.log('got value ' + x);
//   },
//   error(err){
//     console.error('something wrong occurred: ' + err);
//   },
//   complete(){
//     console.log('done')
//   }
// })
// console.log('just after subscribe');


/**
 * Operators 操作符
 */
// import { first, of, map, concatAll, concatMap } from 'rxjs'
// of(1, 2, 3)
//   .pipe(
//     map((x) => x * x), 
//   )
//   .subscribe(function observer(v){
//     console.log(v)
//   })

/**
 * 高阶操作符
 */

// import { fromEvent, map, interval, take, concatAll } from 'rxjs';
 
// const clicks = fromEvent(document, 'click');
// const higherOrder = clicks.pipe(
//   map(() => interval(1000).pipe(take(4)))
// );
// const firstOrder = higherOrder.pipe(concatAll());
// firstOrder.subscribe(x => console.log(x));

// import './subject'
import './operator'