var core = require('lodash');

var dest = {
  p: {
    x: 10,
    y: 20,
    t: {
      k: 16,
      zx: {
        v: 15
      }
    }
  },
};

var Animal = {
  pre: function(){ console.log('FooBar'); }
};

var src = {
  p: {
    x: 20,
    z: 30,
    g:function g(){ console.log('Foo'); },
    t: {
      k:13,
      zx: {
        v: 17
      },
      l: function(){} },
      po: Animal
    },
};

console.log(JSON.stringify(core.merge(dest, src)));
console.log(JSON.stringify(core.extend(dest, src)));
console.log(JSON.stringify(Object.assign(dest, src)));
