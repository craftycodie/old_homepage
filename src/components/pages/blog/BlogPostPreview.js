import React from "react";
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { apiHandler, showdownConverter } from "../../../App";

export default class blogPostPreview extends React.Component {
  render() {
    return (
    <div className={"blogPostPreview" + (this.props.sticky ? " sticky" : "")}>
    <h2 className="">{this.props.blogPost.title}</h2>
    {apiHandler.JWT != null ? <small>{this.props.blogPost._id}</small> : ""}
    <div className="blogPreviewBody">
    {ReactHtmlParser(showdownConverter.makeHtml(this.props.blogPost.body.substring(0,500) + "..."))} </div>
    <Link className="readMore" to={"blog/post/" + this.props.blogPost._id}>Read More >></Link>
    {this.props.blogPost.sticky ? <span className="badge badge-secondary right">Sticky Post</span> : ""}
  <hr/>
  </div>);
  }
}