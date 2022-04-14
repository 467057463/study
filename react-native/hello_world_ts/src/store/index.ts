import {getSnapshot, types} from 'mobx-state-tree';

const Todo = types
  .model({
    name: 'abc',
    done: false,
  })
  .actions();

const User = types.model({
  name: '',
});

export const store = Todo.create();
console.log(getSnapshot(store));
