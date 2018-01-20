import React from "react"
import { Link } from 'react-router-dom';

export default class blogPostPreview extends React.Component {
  render() {
    return (<div className="blogPostPreview">
    <h3 class="left">{this.props.blogPost.title}</h3>
    <p>{this.props.blogPost.body}... <Link to={"blog/post/" + this.props.blogPost._id}>Read More >></Link></p>
  </div>);
  }
}