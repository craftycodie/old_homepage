import React from "react"
import { apiHandler, currentLocation } from "../../App"
import { reloadPosts } from "../pages/Blog";
import { Link } from 'react-router-dom';

export default class AdminBar extends React.Component {

    constructor(props)
    {
        super(props);

        console.log(this);

        this.getBlogPostID = this.getBlogPostID.bind(this);
        this.deletePostSubmit = this.deletePostSubmit.bind(this);
        this.editPostSubmit = this.editPostSubmit.bind(this);

        this.state = {
            blogPostID: ""
        }
    }

    getBlogPostID()
    {
        var result = "";
        console.log(currentLocation.pathname);
        if(!currentLocation.pathname.includes("/blog/post"))
            result = "";
        else
            result = currentLocation.pathname.substring(this.props.location.pathname.lastIndexOf("/") + 1);

        if(result === this.state.blogPostID)
            return;

        this.setState({blogPostID: result});
    }

    logoutSubmit()
    {
        apiHandler.logoutUser();
    }
    
    deletePostSubmit()
    {
        if(this.state.blogPostID === "")
            alert("Error deleting post, no post id found.");
        
        console.log(this.state.blogPostID);
        
        reloadPosts();
        apiHandler.deletePost(this.state.blogPostID);
    }

    editPostSubmit()
    {
        if(this.state.blogPostID === "")
            alert("Error editing post, no post id found.");
        
        this.props.history.push("/blog/post/" + this.state.blogPostID + "/edit");
    }

    render() {

        this.getBlogPostID();

        if(apiHandler.isUserLogged())
        {
            return (
                <div id="adminBar">
                    <p>Welcome back <b>Administrator</b>.</p>
                    {this.props.location.pathname.includes("/blog/post") && !this.props.location.pathname.includes("/edit") && !this.props.location.pathname.includes("/new") ? <span><button onClick={this.editPostSubmit} className="btn btn-sm btn-warning">Edit Post</button><button onClick={this.deletePostSubmit} className="btn btn-sm btn-danger">Delete Post</button></span> : null}
                    {this.props.location.pathname.includes("/blog") && !this.props.location.pathname.includes("/blog/post") ? <Link to="/blog/post/new"><button className="btn btn-sm btn-success">New Post</button></Link> : null}
                    <button onClick={this.logoutSubmit} className="btn btn-sm btn-primary">Logout</button>
                </div>
            );
        }
        else
        {
            return null;
        }

    }
}