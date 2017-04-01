var foo = {
  something: function () {
    console.log("Tell me something good...");
  }
};

var bar = Object.create( foo );

bar.something();






Task = {
  setID: function (ID) { this.id = ID; },
  outputID: function () { console.log(this.ID); }
};

XYZ = Object.create( Task );
XYZ.prepareTask = function (ID,Label) {
  this.setID(ID);
  this.label = Label;
};

XYZ.outputTaskDetails = function () {
  this.outputID();
  console.log( this.label );
};
