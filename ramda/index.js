const curry = R.curry;

const match = curry((wath, str) => str.match(wath));

const replace = curry((waht, replacement, str) => str.replace(waht, replacement));

const filter = curry((f, ary) => ary.filter(f));

// const map = curry((f, ary) => ary.map(f));
const map = curry((f, any_functor_at_all) => any_functor_at_all.map(f))

const concat = curry((val, str) => str.concat(val))

function Container (x){
  this.__value = x;
}

Container.of = function(x){
  return new Container(x)
}

Container.prototype.map = function (f){
  return Container.of(f(this.__value))
}

function Maybe (x){
  this.__value = x;
}

Maybe.of = function(x){
  return new Maybe(x)
}

Maybe.prototype.isNothing = function (){
  return this.__value === null || this.__value === undefined;
}

Maybe.prototype.map = function (f){
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}
