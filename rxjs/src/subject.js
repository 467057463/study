/**
 * demo 1
 * subject 直接当作 observable
 */

// import { Subject } from 'rxjs';

// const subject = new Subject();

// subject.subscribe((v) => {
//   console.log(`A: ${v}`)
// })

// subject.next(1)

// subject.subscribe((v) => {
//   console.log(`B: ${v}`)
// })

// subject.next(2)

/**
 * demo 2
 * subject 当作 observer 昨晚 observerable subscribe 参数
 */

// import { Subject, from } from 'rxjs';

// const subject = new Subject();

// const observable = from([1, 2, 3, 4]);

// subject.subscribe((v) => {
//   console.log(`A: ${v}`)
// })

// subject.subscribe((v) => {
//   console.log(`B: ${v}`)
// })

// observable.subscribe(subject);

/**
 * demo 3
 * multicast 
 */

// import { from, Subject, multicast } from 'rxjs';

// const source = from([1, 2, 3]);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));

// multicasted.subscribe((v) => {
//   console.log(`A: ${v}`)
// })


// multicasted.subscribe((v) => {
//   console.log(`B: ${v}`)
// })

// const c = multicasted.connect();

/**
 * demo 4
 * 行为主体
 */

import { BehaviorSubject } from 'rxjs';
const subject = new BehaviorSubject(0);

subject.subscribe((v) => {
  console.log(`A: ${v}`)
})

subject.next(1)
subject.next(2)

subject.subscribe((v) => {
  console.log(`B: ${v}`)
})

subject.next(3);