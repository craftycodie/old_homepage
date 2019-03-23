import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'

import About from '../screens/About'

class AboutRoutes extends React.Component {
  render () {
    return (
      <Switch location={this.props.location}>
        <Route exact path='/about' component={About} />
      </Switch>
    )
  }
}

const mapStateToProps = ({ history }) => ({ history })

export default connect(mapStateToProps)(AboutRoutes)
