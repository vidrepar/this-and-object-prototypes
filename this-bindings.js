// Default binding
function foo(){
  console.log(this.a);
}

this.a = 2;

foo(); // 2, undefined in strict mode and node

// Implicit binding
function bar(){
  console.log(this.a);
}

var barObj = {
  a: 3,
  bar: bar
};

barObj.bar(); // 3

var barRefLost = barObj.bar;

barRefLost(); // undefined

// functions callbacks can loose or change this binding

// Explicit binding
function baz(){
  console.log(this.a);
}

var bazObj = {
  a: 6
};

baz.call(bazObj); // 6

// Hard binding
function animal() {
  console.log(this.a);
}

var animalObj = {
  a: 78
};

var human = function(){
  animal.call(animalObj);
};

human(); // 78
setTimeout(human, 100); // 78

function car(something){
  console.log(this.a, something);
  return this.a + something;
}

var carObj = {
  a:189
};

var bike = car.bind(carObj); // since ES5

var c = bike(1); // 189 1
console.log(c); // 190

// new binding
  // a brand new object is created out of thin air
function asgards(a){
  this.a = a;
}

var ancients = new asgards(56);
console.log(ancients.a);

















// End
