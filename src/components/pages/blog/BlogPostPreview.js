import React from "react";
import { Link } from 'react-router-dom';
import showdown from "showdown";
import ReactHtmlParser from 'react-html-parser';
import { apiHandler } from "../../../App";

export default class blogPostPreview extends React.Component {
  render() {
    var converter = new showdown.Converter();
    return (
    <div className={"blogPostPreview" + (this.props.sticky ? " sticky" : "")}>
    <h3 className="">{this.props.blogPost.title}</h3>
    {apiHandler.JWT != null ? <small>{this.props.blogPost._id}</small> : ""}
    <div className="blogPreviewBody">
    {ReactHtmlParser(converter.makeHtml(this.props.blogPost.body.substring(0,500) + "..."))} </div>
    <Link className="readMore" to={"blog/post/" + this.props.blogPost._id}>Read More >></Link>
    {this.props.blogPost.sticky ? <span className="badge badge-secondary right">Sticky Post</span> : ""}
  <hr/>
  </div>);
  }
}