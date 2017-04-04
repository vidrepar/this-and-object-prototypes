var LoginController = {
  errors: [],
  getUser: function () {
    //return document.getElementById("login_username");
  },
  getPassword: function () {
    //return document.getElementById("login_password");
  },
  validateEntry: function ( user,pw ) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if ( !(user && pw) ) {
      return this.failure("Please enter a username & password!");
    } else if (pw.length < 5) {
      return this.failure("Pw must be 5+ chars");
    }

    return true;
  },
  showDialog: function (title,msg) {
    // ...
  },
  failure: function (err) {
    this.errors.push(err);
    this.showDialog("Error", "Login invalid" + err);
  }
};

/*
LoginController
  AuthController
*/
AuthController = Object.create( LoginController );

AuthController.checkAuth = function () {
  // ...
};

/*
  https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9
  One major drawback to delegation is that it’s not very good for storing state.
  In order to preserve instance safety, you need to make a copy of the state for each object.
  Prior to ES6, it was common to use similar `.extend()` methods from Lodash, Underscore, or jQuery.
*/

// OLOO && concatenative inheritance combined
var Foo = {
  a:3,
  b:5
};

var Bar = Object.assign(Object.create(Foo), Foo, { // THIS!!!
  g:6,
  a:10
} );

var Baz = Object.assign(Object.create(null), Foo, {
  g:6,
  a:10
} );

console.log(Foo);
console.log(Bar, Object.getPrototypeOf(Bar) === Foo );
console.log(Baz, Object.getPrototypeOf(Baz) === Foo );














// End
