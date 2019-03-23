import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'

import Blog from '../screens/Blog'
import BlogPost from '../screens/BlogPost'
import BlogPostEditor from '../screens/BlogPostEditor'

class BlogRoutes extends React.Component {
  render () {
    return (
      <Switch location={this.props.location}>
        <Route exact path='/blog/post/:postID/edit' component={BlogPostEditor} />
        <Route exact path='/blog/post/new' component={BlogPostEditor} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog/post/:postID' component={BlogPost} />
      </Switch>
    )
  }
}

const mapStateToProps = ({ history }) => ({ history })

export default connect(mapStateToProps)(BlogRoutes)
