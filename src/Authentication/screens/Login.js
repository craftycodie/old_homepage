import React from 'react'
import { apiHandler } from '../../App'

export default class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange (event) {
    var obj = {}
    obj[event.target.id] = event.target.value
    this.setState(obj)
  }

  submitLoginForm () {
    apiHandler.loginUser(this.state.username, this.state.password)
  }

  render () {
    return (
      <div className='page'>
        <div id='login' className='centerMargins'>
          <h2>Login</h2>
          <form>
            <div class='form-group'>
              <label for='username'>Username</label>
              <input value={this.state.username} onChange={this.handleChange.bind(this)} type='text' class='form-control' id='username' aria-describedby='usernameHelp' placeholder='Enter username' />ß
            </div>
            <div class='form-group'>
              <label for='password'>Password</label>
              <input value={this.state.password} onChange={this.handleChange.bind(this)} type='password' class='form-control' id='password' placeholder='Enter Password' />
            </div>
          </form>
          <button onClick={this.submitLoginForm.bind(this)} className='btn btn-primary'>Login</button>
        </div>
      </div>
    )
  }
}
