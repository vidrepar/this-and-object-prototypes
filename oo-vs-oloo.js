// Classical prototypal OO

function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function () {
  return "I am " + this.me;
};

function Bar(who) {
  Foo.call( this, who );
}

Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.speak = function () {
  console.log( "Hello, " + this.identify() + "." );
};

var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );

b1.speak();
b2.speak();

// OLOO

FooOloo = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return "I am " + this.me;
  }
};

BarOloo = Object.create( FooOloo );

BarOloo.speak = function () {
  console.log("Hello, " + this.identify() + ".");
};

var bOloo1 = Object.create( BarOloo );
bOloo1.init( "Lindsay Lohan" );
var bOloo2 = Object.create( BarOloo );
bOloo2.init( "Achmed" );

bOloo1.speak();
bOloo2.speak();
