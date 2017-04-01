var anotherObject = {
	a: 2
};

var myObject = Object.create( anotherObject );

console.log(myObject.a); // 2

for (var k in myObject) {
	console.log(k);
}

// a

console.log("a" in myObject); // true

function Foo() {

}

var a = new Foo();

console.log(Object.getPrototypeOf( a ) === Foo.prototype); // true
