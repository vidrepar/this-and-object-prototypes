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
