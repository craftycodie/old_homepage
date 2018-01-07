import React from "react"
import request from "superagent"
import InfiniteScroll from 'react-infinite-scroll-component';


import BlogPost from "./blog/BlogPost";

import { URLSearchParams } from 'url';



export default class Blog extends React.Component {
  
  constructor () {
    super();

    //var initialPosts = loadPosts();

    this.state = {
      postElements: [],
      hasMore: true
    };
    this.loadPosts = this.loadPosts.bind(this);
    this.refresh = this.refresh.bind(this);

    this.loadPosts();
  }

  loadPosts () {
    let count = 20;
    let morePosts = [];
    let at = this.state.postElements.length;
    request
    .get('http://localhost:8080/api/blog/posts/recent')
    .query({ at: at, count: count }) // query string
    .set('Accept', 'application/json')
    .set("Cache-Control", "no-cache")
.end((err, res) => {
      console.log(JSON.parse(res.text));
      
      JSON.parse(res.text).data.forEach(blogPost => {
        morePosts.push(<BlogPost key={blogPost._id} blogPost={blogPost}/>)
      });

      if(JSON.parse(res.text).data.count < count)
      {
        this.setState({hasMore: false});
      }
    });

    setTimeout(() => {
      this.setState({postElements: this.state.postElements.concat(morePosts)});
    }, 500);
  }
  
  refresh () {
    this.setState({postElements: []});
    setTimeout(() => {
      this.setState({});
    }, 3000);
  }

//   buildElements(start, count) {
//     var elements = [];


//     request
//     .get('http://localhost:8080/api/blog/posts/recent')
//     .query({ at: start, count: count }) // query string
//     .set('Accept', 'application/json')
//     .set("Cache-Control", "no-cache")
// .end((err, res) => {
//       console.log(JSON.parse(res.text));
      
//       JSON.parse(res.text).data.forEach(blogPost => {
//         elements.push(<BlogPost key={blogPost._id} blogPost={blogPost}/>)
//       });
//     });

//     return elements;

//     //console.log(elements);
//     //console.log(this.state.elements)
//   }

//   handleInfiniteLoad() {
//     //var that = this;
//     this.setState({
//         isInfiniteLoading: true
//     });
//     var that = this;
//     setTimeout(function() {
//         var elemLength = that.state.elements.length,
//             newElements = that.buildElements(elemLength, 20);
//         that.setState({
//             isInfiniteLoading: false,
//             elements: that.state.elements.concat(newElements)
//         });
//         //that.infiniteLoad();
//     }, 2500);
// }

// elementInfiniteLoad() {
//   return <div className="infinite-list-item">
//       Loading...
//   </div>;
// }

render() {
  return         <div id="blog"><InfiniteScroll
  next={this.loadPosts}
  hasMore={this.state.hasMore}
  loader={<h1>Loading...</h1>}>
  {this.state.postElements}
</InfiniteScroll></div>
};
}
