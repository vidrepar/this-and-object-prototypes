var fp = require('lodash/fp');
var core = require('lodash');

// Debug util
var trace = fp.curry(function (label, x) {
  console.log('== ' + label + ':  ' + x);
  return x;
});

var toSlug = fp.flow(
  fp.split(' '),
  trace('input'),
  fp.map(core.toLower),
  trace('lowercase'),
  fp.join('-'),
  trace('joined')
);

console.log(toSlug('JS Cheerleader'));
