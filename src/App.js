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

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const App = withRouter(({ location }) => (
  <div className="App">
    <Header />
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames='slideleft'
        timeout={500}
      >
        <Switch location={location}>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
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
