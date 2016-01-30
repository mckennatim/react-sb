var React = require('react');

class Main extends React.Component{
  render() {
    return (
      <div>
        Hello Wdorld
      </div>
    )
  }
};

React.render(<Main />, document.getElementById('app'));