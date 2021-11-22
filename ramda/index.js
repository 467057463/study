const curry = R.curry;

const match = curry((wath, str) => str.match(wath));

const replace = curry((waht, replacement, str) => str.replace(waht, replacement));

const filter = curry((f, ary) => ary.filter(f));

const map = curry((f, ary) => ary.map(f));

