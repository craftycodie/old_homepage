import React from "react"
import { Link, BrowserRouter } from 'react-router-dom';

export default class Navigation extends React.Component {

    start = null;
    canNav = false;
    intervalID = null;

    constructor(props) {
      super(props);
      this.state = {}
      this.tick = this.tick.bind(this);
      this.intervalID = setInterval(this.tick, 500);
      this.onClick = this.onClick.bind(this);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    
    tick(){
  
        clearInterval(this.intervalID);
        this.canNav = true;
        this.forceUpdate();
    }

    onClick()
    {
      if(!this.canNav)
        return
      else
        {
          this.intervalID = setInterval(this.tick, 500);
          this.canNav = false;
          this.forceUpdate();
        }
    }


  getLinkClassName(){
    if(this.canNav)
      return ""
    else
      return "not-active"
  }

  render() {
    return (
        <nav>
          <Link onClick={this.onClick} className={this.getLinkClassName()} to="/">Portfolio</Link>
          <span> | </span>
          <Link onClick={this.onClick} className={this.getLinkClassName()} to="/blog">Blog</Link>
          <span> | </span>
          <Link onClick={this.onClick} className={this.getLinkClassName()} to="/about">About</Link>
        </nav>
    );
  }
}