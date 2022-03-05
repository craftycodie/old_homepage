import React from 'react';

import { Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Header from "./components/global/Header";
//import Footer from "./components/global/Footer";

import Portfolio from "./components/pages/Portfolio";
import BlogPost from "./components/pages/blog/BlogPost";
import About from "./components/pages/About";
import Error404 from "./components/pages/Error404";

export var currentLocation = null;
export default class App extends React.Component {
  
  constructor (props) {
    super(props);
  }

  render() {

    currentLocation = this.props.location;
    return (
      <div className="App">
      <Header location={this.props.location}/>
        <Switch location={this.props.location}>          
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/blog/post/:postID" component={BlogPost} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
  
          <Route path="*" component={Error404} />
        </Switch>
    </div>
    );
  }
}