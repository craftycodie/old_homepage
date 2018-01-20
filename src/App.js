import React, { Component } from 'react';
import './App.css';

import { Switch, BrowserRouter } from 'react-router-dom';
import { Route, DefaultRoute, withRouter } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/blog/BlogPost";
import About from "./components/pages/About";
import Error404 from "./components/pages/Error404";

var navigationOrder = {};
navigationOrder["/"] = 0;
navigationOrder["/blog"] = 1;
navigationOrder["/blog/post"] = 2;
navigationOrder["/about"] = 3;

var prevLocationPathname = null;
function getAnimationClassName(location)
{
  var prevOrder = navigationOrder[prevLocationPathname];
  var newOrder = navigationOrder[location.pathname];

  if(prevLocationPathname != null && prevLocationPathname.indexOf("/blog/post") !== -1)
    prevOrder = navigationOrder["/blog/post"];

  if(location.pathname.indexOf("/blog/post") !== -1)
    newOrder = navigationOrder["/blog/post"];
  
  var animationName = "slideleft";

  if(newOrder < prevOrder)
    animationName = "slideright";
  else if(newOrder == prevOrder)
    animationName = "";

  prevLocationPathname = location.pathname;
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
    <TransitionGroup id="pageContainer" childFactory={childFactoryCreator(getAnimationClassName(location))}>
      <CSSTransition key={location.key} timeout={500}>
      <Switch location={location}>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/post/:postID" component={BlogPost} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="*" component={Error404} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    
  </div>
))

export default App;
