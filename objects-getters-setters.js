var myObject = {
  get a() {
    return 2;
  }
}

Object.defineProperty( myObject, "b", {
  get: function(){ return this.a*2 },
  enumerable: true
} );

console.log(myObject.a); // 2
console.log(myObject.b); // 4

myObject.a = 3;

console.log(myObject.a); // 2

var myObject = {
  get a() {
    return this._a_;
  },
  set a(val) {
    this._a_ = val*2;
  }
};

myObject.a = 2;
console.log(myObject.a); // 4
