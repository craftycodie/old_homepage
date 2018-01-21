import React from "react"
import { apiHandler } from "../../App"

export default class Login extends React.Component {
  
constructor(props)
{
  super(props)

  this.state = {uername: '', password: ''};

  this.handleChange = this.handleChange.bind(this);
  this.submitLoginForm = this.submitLoginForm.bind(this);
}

handleChange(event) {
  var obj = {};
  obj[event.target.id] = event.target.value;
  this.setState(obj);
}

  submitLoginForm()
  {
    apiHandler.loginUser(this.state.username, this.state.password);
  }

  render() {
    return (
    <div className="page">
        <div id="login" className="centerMargins">
          <h2>Login</h2>
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input value={this.state.username} onChange={this.handleChange} type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
              {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input value={this.state.password} onChange={this.handleChange} type="password" class="form-control" id="password" placeholder="Enter Password" />
            </div>
            {/* <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
          </form>
          <button onClick={this.submitLoginForm} className="btn btn-primary">Login</button>
        </div>
    </div>
  );
  }
}