var myObject = {};

Object.defineProperty( myObject, "a", {
  enumerable: true,
  value: 2
} );

Object.defineProperty( myObject, "b", {
  enumerable: false,
  value: 3
} );

console.log(myObject.b); // 3
console.log("b" in myObject); // true
console.log(myObject.hasOwnProperty("b")); // true

for (var k in myObject) {
  console.log(k, myObject[k]); // a 2
}

console.log(myObject.propertyIsEnumerable("a")); // true
console.log(myObject.propertyIsEnumerable("b")); // false

console.log(Object.keys( myObject )); // ["a"]
console.log(Object.getOwnPropertyNames( myObject )); // ["a", "b"]

var myArray = [ 1,2,3 ];

for ( var v of myArray ) {
  console.log(v);
}

// 1
// 2
// 3

var it = myArray[Symbol.iterator]();

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }

var myObject = {
  a: 2,
  b: 3
};

Object.defineProperty( myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: false,
  value: function () {
    var o = this;
    var idx = 0;
    var ks = Object.keys( o );

    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: ( idx > ks.length )
        }
      }
    }
  }
} );

var it2 = myObject[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

for ( var v of myObject ) {
  console.log( v );
}
