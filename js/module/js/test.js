const name = 'mm';
const age = 19;

console.log('test')

export {
  name as N,
  age as A,
  name,
  age
}

export default {
  name,
  age
}

export { work as W } from './test2.js';

console.log('test')
