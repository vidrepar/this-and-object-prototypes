var myObject = {};

Object.defineProperty( myObject, "FAVOURITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
} );

console.log(myObject.FAVOURITE_NUMBER); // 42
myObject.FAVOURITE_NUMBER = 3;
console.log(myObject.FAVOURITE_NUMBER); // 42


var fooObject = {
  a: 2
}

Object.preventExtensions( fooObject );
fooObject.b = 3;
console.log(fooObject.b); // undefined
