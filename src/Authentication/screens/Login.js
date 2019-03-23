import React from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/authActions'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange (event) {
    var obj = {}
    obj[event.target.id] = event.target.value
    this.setState(obj)
  }

  render () {
    return (
      <div className='page'>
        <div id='login' className='centerMargins'>
          <h2>Login</h2>
          <form>
            <div class='form-group'>
              <label for='username'>Username</label>
              <input value={this.state.username} onChange={this.handleChange.bind(this)} type='text' class='form-control' id='username' aria-describedby='usernameHelp' placeholder='Enter username' />
            </div>
            <div class='form-group'>
              <label for='password'>Password</label>
              <input value={this.state.password} onChange={this.handleChange.bind(this)} type='password' class='form-control' id='password' placeholder='Enter Password' />
            </div>
          </form>
          <button onClick={() => { this.props.login(this.state.username, this.state.password) }} className='btn btn-primary'>Login</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
})

export default connect(null, mapDispatchToProps)(Login)
