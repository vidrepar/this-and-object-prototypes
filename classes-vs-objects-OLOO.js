var Widget = {
  init: function ( w,h ) {
    this.w = w || 50,
    this.h = h || 50,
    this.$elem = null
  },
  insert: function ( $where ) {
    if ( this.$elem ) {
      this.$elem.css( {
        width: this.w + "px",
        height: this.h + "px"
      } ).appendTo( $where );
    }
  }
};

/*
Widget
  Button
*/
var Button = Object.create( Widget );

Button.setup = function ( w,h,l ) {
  // delegated call
  this.init( w,h );
  this.l = l || "Default";

  this.$elem = $( "<button>" ).text( this.l );
};

Button.build = function ( $where ) {
  // delegated call
  this.insert( $where );
  this.$elem.click( this.onClick.bind( this ) );
};

Button.onClick = function () {
  console.log( "Button " + this.l + " clicked!" );
};

$( document ).ready( function(){
  var $body = $( document.body );

  var btn1 = Object.create( Button );
  btn1.setup( 125, 30, "Hello" );
  var btn2 = Object.create( Button );
  btn2.setup( 150, 40, "World" );

  btn1.build( $body );
  btn2.build( $body );
} );
