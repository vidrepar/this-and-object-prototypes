// Parent class
function Controller () {
  this.errors = [];
}

Controller.prototype.showDialog = function (title,msg) {
  console.log("WooOOoow");
};

Controller.prototype.success = function (msg) {
  this.showDialog( "Success", msg );
};

Controller.prototype.failure = function (err) {
  this.errors.push(err);
  this.showDialog( "Error", err );
};

// Child class
function LoginController () {
  Controller.call( this );
}

// Link child class to parent
LoginController.prototype = Object.create( Controller.prototype );
LoginController.prototype.getUser = function () {
  return document.getElementById( "login_username" ).value;
};
LoginController.prototype.getPassword = function () {
  return document.getElementById( "login_password" ).value;
};
LoginController.prototype.validateEntry = function ( user,pw ) {
  user = user || this.getUser();
  pw = pw || this.getPassword();

  if ( !( user && pw ) ) {
    return this.failure("Please enter username and password!");
  } else if ( pw.length < 5 ) {
    return this.failure("Password must be 5+ chars!");
  }

  return true;
};

// Override to extend base "failure()"
LoginController.prototype.failure = function (err) {
  // super call
  Controller.prototype.failure.call( this, "Login invalid:" + err );

};

// Another child class
function AuthController( login ) {
  Controller.call( this );
  // composition
  this.login = login;
}

AuthController.prototype = Object.create( Controller.prototype );

AuthController.prototype.server = function ( url,data ) {
  return $.ajax( {
    url:url,
    data:data
   } );
};
AuthController.prototype.checkAuth = function () {
  var user = this.login.getUser();
  var pw = this.login.getPassword();

  if ( this.login.validateEntry(user,pw) ) {
    this.server("/check-auth", {
      user:user,
      pw:pw
    })
    .then( this.success.bind(this) )
    .fail( this.failure.bind(this) );
  }
};

AuthController.prototype.success = function () {
  // super call
  Controller.prototype.success.call(this, "Authenticated!");
};

AuthController.prototype.failure = function (err) {
  Controller.prototype.failure.call(this, "Auth failed" + err);
};

var auth = new AuthController(
  new LoginController()
);

auth.checkAuth();
