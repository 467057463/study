import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';

const obs$ = ajax('https://api.github.com/users?per_page=5')
.pipe(map(res => res))

obs$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err)
})



// import { ajax } from 'rxjs/ajax'
// import { map } from 'rxjs'

// ajax({
//   url: 'https://httpbin.org/delay/2',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: 'Hello, World!',
// })
//   .pipe(map(res => res.response.data))
//   .subscribe(console.log) // Hello World!