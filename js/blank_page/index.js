const names = "cw";
function fun() {
  const name1 = "mm";
  return function(){
    const name2 = 'ff';
    return function(){
      const name3 = 'kl'
      console.log(names, name1, name2, name3)
    }
  };
}

fun()()();