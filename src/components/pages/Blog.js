import React from "react"
import request from "superagent"
import Infinite from "react-infinite"

import BlogPost from "./blog/BlogPost";

import { URLSearchParams } from 'url';



export default class Blog extends React.Component {


constructor(props) {
  super(props);

  this.state = {
    elements: this.buildElements(0, 20),
    isInfiniteLoading: false
  };

  this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
}

  buildElements(start, count) {
    var elements = [];


    request
    .get('http://localhost:8080/api/blog/posts/recent')
    .query({ at: start, count: count }) // query string
    .set('Accept', 'application/json')
    .set("Cache-Control", "no-cache")
.end((err, res) => {
      console.log(JSON.parse(res.text));
      
      JSON.parse(res.text).data.forEach(blogPost => {
        elements.push(<BlogPost key={blogPost._id} blogPost={blogPost}/>)
      });
    });

    return elements;

    //console.log(elements);
    //console.log(this.state.elements)
  }

  handleInfiniteLoad() {
    //var that = this;
    this.setState({
        isInfiniteLoading: true
    });
    var that = this;
    setTimeout(function() {
        var elemLength = that.state.elements.length,
            newElements = that.buildElements(elemLength, 20);
        that.setState({
            isInfiniteLoading: false,
            elements: that.state.elements.concat(newElements)
        });
        //that.infiniteLoad();
    }, 2500);
}

elementInfiniteLoad() {
  return <div className="infinite-list-item">
      Loading...
  </div>;
}

render() {
  return <Infinite elementHeight={40}
                   containerHeight={250}
                   infiniteLoadBeginEdgeOffset={200}
                   onInfiniteLoad={this.handleInfiniteLoad}
                   loadingSpinnerDelegate={this.elementInfiniteLoad()}
                   isInfiniteLoading={this.state.isInfiniteLoading}
                   >
      {this.state.elements}
  </Infinite>;
};
}
