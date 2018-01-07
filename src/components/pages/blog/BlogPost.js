import React from "react"

export default class BlogPost extends React.Component {
  render() {
    return (<div className="blogPost">
    <h3>{this.props.blogPost.title}</h3>
    <p>{this.props.blogPost.body}</p>
  </div>);
  }
}