import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import AuthenticationRoutes from '../../Authentication/routes'
import AboutRoutes from '../../About/routes'
import BlogRoutes from '../../Blog/routes'
import PortfolioRoutes from '../../Portfolio/routes'

import Error404 from '../screens/Error404'

var navigationOrder = {}
navigationOrder['/'] = 0
navigationOrder['/blog'] = 1
navigationOrder['/blog/post'] = 2
navigationOrder['/blog/post/edit'] = 3
navigationOrder['/about'] = 4
navigationOrder['/login'] = 5

var prevLocationPathname = null
function getAnimationClassName (location) {
  var prevOrder = navigationOrder[prevLocationPathname]
  var newOrder = navigationOrder[location.pathname]

  if (prevLocationPathname != null && prevLocationPathname.indexOf('/blog/post') !== -1) { prevOrder = navigationOrder['/blog/post'] }

  if (location.pathname.indexOf('/blog/post') !== -1) { newOrder = navigationOrder['/blog/post'] }

  if (location.pathname.indexOf('/edit') !== -1) { newOrder = navigationOrder['/blog/post/edit'] }

  var animationName = 'slideleft'

  if (newOrder < prevOrder) { animationName = 'slideright' } else if (newOrder === prevOrder) { animationName = '' }

  prevLocationPathname = location.pathname
  console.log(animationName)
  return animationName
}

// This returns a childFactory to provide to TransitionGroup
const childFactoryCreator = (classNames) =>
  (child) => (
    React.cloneElement(child, {
      classNames
    })
  )

export default class componentName extends Component {
  render () {
    currentLocation = this.props.location
    return (
      <TransitionGroup id='pageContainer' childFactory={childFactoryCreator(getAnimationClassName(this.props.location))}>
        <CSSTransition key={this.props.location.key} timeout={500}>
          <Switch location={this.props.location}>

            <AuthenticationRoutes />
            <AboutRoutes />
            <BlogRoutes />
            <PortfolioRoutes />

            <Route path='*' component={Error404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
