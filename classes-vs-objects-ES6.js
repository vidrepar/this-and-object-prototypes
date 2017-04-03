// ES6 way
class Widget {
  constructor ( w,h ) {
    this.w = w || 50;
    this.h = h || 50;
  }
  render( $where ){
    if ( this.$elem ) {
      this.$elem.css( {
        width: this.w + "px",
        height: this.h + "px"
      } ).appendTo( $where );
    }
  }
}

class Button extends Widget {
  constructor ( w,h,l ) {
    super( w,h );
    this.l = l || "Default";
    this.$elem = $( "<button>" ).text( this.l );
  }
  render ( $where ) {
    super( $where );
    this.$elem.click( this.onClick.bind( this ) );
  }
  onClick (evt) {
    console.log( "Button " + this.l + "clicked!" );
  }
}
