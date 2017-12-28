import React, { Component } from 'react';
import './App.css';

import { Switch, BrowserRouter } from 'react-router-dom';
import { Route, withRouter } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";

var navigationOrder = {};
navigationOrder["/"] = 0;
navigationOrder["/blog"] = 1;
navigationOrder["/about"] = 2;

var prevLocation = null;
function getAnimationClassName(location)
{
  //console.log(prevLocation);
  //console.log(location.pathname);

  var prevOrder = navigationOrder[prevLocation];
  var newOrder = navigationOrder[location.pathname];
  
  var animationName = "slideleft";

  if(newOrder < prevOrder)
    animationName = "slideright";

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
      <CSSTransition key={location.pathname} classNames={getAnimationClassName(location)} timeout={500}>
      <Switch location={location}>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
{/* 
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames={getAnimationClassName(location)}
        timeout={500}
      >
        <Switch location={location}>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </CSSTransition>
    </TransitionGroup> */}
    <Footer />
  </div>
)) 

// class App extends Component {
//   render() {
//     return (
//       withRouter(({ location }) => (
//         <div className="App">
//           <Header />
//           <TransitionGroup>
//             <CSSTransition key={location.key}>
//               <Switch>
//                 <Route exact path="/" component={Portfolio} />
//                 <Route exact path="/blog" component={Blog} />
//                 <Route exact path="/about" component={About} />
//                 <Route exact path="/portfolio" component={Portfolio} />
//               </Switch>
//             </CSSTransition>
//           </TransitionGroup>
//           <Footer />
//         </div>
//     )));
//   }
// }

export default App;