import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

const App = React.createClass({
  render(){
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dogs">Dogs</Link></li>
          <li><Link to="/cats">Cats</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>

        {this.props.children}
      </div>
      )
  }
})
const NoMatch = React.createClass({
  render(){
    return (
      <div> ins no  atch

      </div>
      )
  }
})
const About = React.createClass({
  render(){
    return (
      <div>in about</div>
      )
  }
})
const Dogs = React.createClass({
  // mixins: [ History ],
  handleButtonClick(){
    console.log('in dogs button');
    // router.push('/cats');
    console.log(History);
  },
  render(){
    return (
      <div>in dogs
        <button onClick={this.handleButtonClick} >to cats
        </button>
      </div>
      )
  }
})

const Cats = React.createClass({
  render(){
    return (
        <div>
          ins cats
        </div>
      )
  }
})

// etc.

const Users = React.createClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="dogs" component={Dogs}/>
      <Route path="cats" component={Cats}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'))