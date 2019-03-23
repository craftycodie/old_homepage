import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'

import Portfolio from '../screens/Portfolio'

class PortfolioRoutes extends React.Component {
  render () {
    return (
      <Switch location={this.props.location}>
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    )
  }
}

const mapStateToProps = ({ history }) => ({ history })

export default connect(mapStateToProps)(PortfolioRoutes)
