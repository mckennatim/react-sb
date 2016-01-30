var Radium = require('radium');
var React = require('react');
//var color = require('color');

@Radium //needs babel?stage=0
class Button extends React.Component {
  static propTypes = { //needs babel?stage=0
    kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
  };

  render() {
    // Radium extends the style attribute to accept an array. It will merge
    // the styles in order. We use this feature here to apply the primary
    // or warning styles depending on the value of the `kind` prop. Since its
    // all just JavaScript, you can use whatever logic you want to decide which
    // styles are applied (props, state, context, etc).
    return (
    	<div>
      <button key="button"
        style={[
          styles.base,
          styles[this.props.kind]
        ]}>
        {this.props.children}
      </button>
      	{Radium.getState(this.state, 'button', ':hover') ? (
          <span>{' '}Hovering!</span>
        ) : null}
        </div>
    );
  }
}

//Button = Radium(Button) // use if @Radium wont work

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: '#AEB3FF'
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};

React.render(<Button kind="warning">Radium Button</Button>, document.getElementById('app'));