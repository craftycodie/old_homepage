import React, { Component } from 'react';
import './App.css';

import { Switch, BrowserRouter } from 'react-router-dom';
import { Route, DefaultRoute, withRouter } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Error404 from "./components/pages/Error404";

var navigationOrder = {};
navigationOrder["/"] = 0;
navigationOrder["/blog"] = 1;
navigationOrder["/about"] = 2;

var prevLocation = null;
function getAnimationClassName(location)
{
  var prevOrder = navigationOrder[prevLocation];
  var newOrder = navigationOrder[location.pathname];
  
  var animationName = "slideleft";

  if(newOrder < prevOrder)
    animationName = "slideright";
  else if(newOrder == prevOrder)
    animationName = "";

  prevLocation = location.pathname;
  console.log(animationName);
  return animationName;
}

//This returns a childFactory to provide to TransitionGroup
const childFactoryCreator = (classNames) => (
  (child) => (
    React.cloneElement(child, {
      classNames
    })
  )
);


const App = withRouter(({ location }) => (
  <div className="App">
    <Header />
    <TransitionGroup childFactory={childFactoryCreator(getAnimationClassName(location))}>
      <CSSTransition key={location.key} classNames={getAnimationClassName(location)} timeout={500}>
      <div id="pageContainer" className="page">
      <Switch location={location}>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="*" component={Error404} />
        </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
    <Footer />
  </div>
))

export default App;
