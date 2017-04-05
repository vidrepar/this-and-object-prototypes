// new vs. explicit binding
function foo(something){
  this.a = something;
}

var obj1 = {
  foo: foo
};

var obj2 = {};

// implicit
obj1.foo(2);
console.log(obj1.a); // 2

// explicit
obj1.foo.call( obj2, 3 );
console.log(obj2.a); // 3

// new
var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4

// don't do new foo.call( obj2, 3 ), not allowed;
// call() or apply() also hidden in bind()

// hard vs. new
function baz(something){
  this.a = something;
}

var obj3 = {};

var mac = baz.bind( obj3 );
mac(7);
console.log(obj3.a); // 7

var gyver = new mac( 9 );
console.log(obj3.a); // 7
console.log(gyver.a); // 9

// Order of precedence

/*

  1. new                      >> var bar = new foo();
  2. call/apply or bind       >> var bar = foo.call( obj );
  3. owning/containing object >> var bar = obj.foo();
  4. otherwise default        >> var bar = foo();

*/






// End
