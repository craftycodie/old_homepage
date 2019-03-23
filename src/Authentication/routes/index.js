import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'

import Login from '../screens/Login'

class AuthenticationRoutes extends React.Component {
  render () {
    return (
      <Switch location={this.props.location}>
        <Route exact path='/login' component={Login} />
      </Switch>
    )
  }
}

const mapStateToProps = ({ history }) => ({ history })

export default connect(mapStateToProps)(AuthenticationRoutes)
