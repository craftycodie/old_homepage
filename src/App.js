import React from 'react';
import './App.css';

import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from "./components/global/Header";
//import Footer from "./components/global/Footer";
import AdminBar from "./components/global/AdminBar";
import Konami from "./components/global/Konami";

import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/blog/BlogPost";
import About from "./components/pages/About";
import Error404 from "./components/pages/Error404";
import Login from './components/pages/Login';

import ApiHandler from './api/apiHandler';
import ApiConfig from './api/localConfig';
export var apiHandler;

var navigationOrder = {};
navigationOrder["/"] = 0;
navigationOrder["/blog"] = 1;
navigationOrder["/blog/post"] = 2;
navigationOrder["/about"] = 3;
navigationOrder["/login"] = 4;

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
  else if(newOrder === prevOrder)
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


export var currentLocation = null;
export default class App extends React.Component {
  
  constructor (props) {
    super(props);
    
    apiHandler = new ApiHandler(ApiConfig, this.props.cookies, this.props.history);
  }

  render() {

    currentLocation = this.props.location;
    return (
      <div className="App">
      <Konami history={this.props.history}/>
      <AdminBar location={this.props.location}/>
      <Header />
      <TransitionGroup id="pageContainer" childFactory={childFactoryCreator(getAnimationClassName(this.props.location))}>
        <CSSTransition key={this.props.location.key} timeout={500}>
        <Switch location={this.props.location}>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/post/:postID" component={BlogPost} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
  
          <Route exact path="/login" component={Login} />
  
          <Route path="*" component={Error404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      
    </div>
    );
  }
}