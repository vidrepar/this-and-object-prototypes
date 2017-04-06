// Ignored this
function foo() {
  console.log(this.a);
}

var a = 2;

foo.call(null); // default binding instead of explicit

function baz(a,b,c){
  console.log('a' + a + ',b' + b + ',c' + c);
}

// spreading out array as parameters
baz.apply(null, [2,3,4]); // a2,b3,c4

var bar = baz.bind(null, 2, 3);
bar(4); // a2,b3,c4

// Safer this
function samsung(a,b,c) {
  console.log('a' + a + ',b' + b + ',c' + c);
}

var ø = Object.create(null);

samsung.apply(ø, [2,3,5]); // a2,b3,c5

var lg = samsung.bind(ø, 2);
lg(3,5); // a2,b3,c5

// Indirection
function iphone() {
  console.log(this.a);
}

var a = 2;
var o = { a: 3, iphone:iphone };
var p = { a: 4 };

o.iphone();
( p.iphone = o.iphone )(); // default binding


/*

  1. Called with new                            >> Use the newly created object
  2. Called with call or apply or bind          >> Use the specified object
  3. Called with context object owning the call >> Use that context object
  4. Default                                    >> undefined in strict mode, global object otherwise

*/

// Call vs. bind
// https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html

function aa(){
  console.log('Wooow, executed!');
}

var bb = aa.call(); // Executed here
var cc = aa.bind();
cc(); // Executed here ( at a later time )
