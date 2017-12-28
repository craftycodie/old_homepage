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

    getInitialState(){
    
        // This is called before our render function. The object that is 
        // returned is assigned to this.state, so we can use it later.
    
        return { elapsed: 0 };
    }

    // componentDidMount(){

    //     // componentDidMount is called by react when the component 
    //     // has been rendered on the page. We can set the interval here:
    
    //     this.timer = setInterval(this.tick, 1000);
    // }
    
    componentWillUnmount(){
    
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
    
        clearInterval(this.intervalID);
    }
    
    tick(){
    
        // This function is called every 50 ms. It updates the 
        // elapsed counter. Calling setState causes the component to be re-rendered
    
        //this.elapsed = new Date() - this.start;
        //this.canNav = true;
        //this.updater.enqueueForceUpdate(this, 'forceUpdate');
        clearInterval(this.intervalID);
        //this.forceUpdate();
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

    //this.start = Date.now();


    console.log("rendering navigation");

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