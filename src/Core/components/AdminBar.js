import React, { Alert } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../../Authentication/actions/authActions'
import { clear, deletePost } from '../../Blog/actions/blogActions'

class AdminBar extends React.Component {
  constructor (props) {
    super(props)

    console.log(this)

    this.getBlogPostID = this.getBlogPostID.bind(this)
    this.deletePostSubmit = this.deletePostSubmit.bind(this)
    this.editPostSubmit = this.editPostSubmit.bind(this)

    this.state = {
      blogPostID: ''
    }
  }

  getBlogPostID () {
    var result = ''
    if (!this.props.location.pathname.includes('/blog/post')) {
      result = ''
    } else {
      result = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1)
    }

    if (result === this.state.blogPostID) { return }

    this.setState({ blogPostID: result })
  }

  logoutSubmit () {
    this.props.logout()
  }

  deletePostSubmit () {
    if (this.state.blogPostID === '') { Alert.alert('Error deleting post, no post id found.') }

    console.log(this.state.blogPostID)

    this.post.deletePost(this.state.blogPostID, () => {
      this.props.clear()
      this.props.history.push('/blog')
    })
  }

  editPostSubmit () {
    if (this.state.blogPostID === '') { Alert.alert('Error editing post, no post id found.') }

    this.props.history.push('/blog/post/' + this.state.blogPostID + '/edit')
  }

  render () {
    this.getBlogPostID()
    console.log(this.props)

    if (this.props.auth.authenticated) {
      return (
        <div id='adminBar'>
          <p>Welcome back <b>Administrator</b>.</p>
          {this.props.location.pathname.includes('/blog/post') && !this.props.location.pathname.includes('/edit') && !this.props.location.pathname.includes('/new') ? <span><button onClick={this.editPostSubmit} className='btn btn-sm btn-warning'>Edit Post</button><button onClick={this.deletePostSubmit} className='btn btn-sm btn-danger'>Delete Post</button></span> : null}
          {this.props.location.pathname.includes('/blog') && !this.props.location.pathname.includes('/blog/post') ? <Link to='/blog/post/new'><button className='btn btn-sm btn-success'>New Post</button></Link> : null}
          <button onClick={this.logoutSubmit} className='btn btn-sm btn-primary'>Logout</button>
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = ({ blog, auth, history }) => ({ blog, auth, history })

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clear: () => dispatch(clear()),
  deletePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminBar)
