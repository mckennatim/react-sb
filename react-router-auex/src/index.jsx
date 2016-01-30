import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
import { myFunc } from './out.js'

//using history does not work, using browserHistory from react-router
import { createHistory } from 'history'
const history = createHistory()
console.log(history)

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
	 contextTypes: {
    history: React.PropTypes.object.isRequired
  },
	handleClick() {
		myFunc();
		console.log(this.context.history)
		this.context.history.push('inbox/messages/415')
	},
  render() {
    return (<div>
    	<h3>Abouet</h3>
    	<button onClick={this.handleClick}>click</button>
    	</div>)
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Dashboard}/>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
