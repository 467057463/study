const { curry, compose, map, join, split } = R;

const name = ['john-reese', 'harold-finch', 'sameen-shaw'] 

const capitalize = x => x[0].toUpperCase() + x.slice(1).toLowerCase();

const genObj = curry((key, x) => {
  let obj = {};
  obj[key] = x;
  return obj;
}) 

const capitalizeName = compose(join(' '), map(capitalize), split('-'));
const convert2Obj = compose(genObj('name'), capitalizeName)
const convertName = map(convert2Obj);

var result = convertName(['john-reese', 'harold-finch', 'sameen-shaw']);

