import React from 'react'
import { connect } from 'react-redux'

import { initialize as initializeHighlighting } from '../utils/highlight'
import InfiniteScroll from 'react-infinite-scroll-component'
import BlogPostPreview from '../components/BlogPostPreview'
import { getDraftPosts, getRecentPosts, getStickyPosts } from '../actions/blogActions'

class Blog extends React.Component {
  state = {
    loading: false,
    error: false
  }

  getInitialPosts () {
    if (!this.props.blog.gotStickyPosts) {
      this.props.getStickyPosts()
    }

    if (!this.props.blog.gotDraftPosts && this.props.auth.authorized) {
      this.props.getDraftPosts()
    }

    if (this.props.blog.posts.length <= 0 && !this.props.blog.gotAllRecentPosts) {
      var recentPosts = this.props.blog.posts.filter(post => { return !post.sticky && !post.draft })
      this.props.getRecentPosts(recentPosts.length, 20)
    }
  }

  getMoreRecentPosts () {
    if (!this.props.blog.gotAllRecentPosts) {
      var recentPosts = this.props.blog.posts.filter(post => { return !post.sticky && !post.draft })
      this.props.getRecentPosts(recentPosts.length, 20)
    }
  }

  componentDidUpdate () {
    initializeHighlighting()
  }

  componentDidMount () {
    this.getInitialPosts()
    initializeHighlighting()
  }

  renderPosts () {
    var renderedPosts = []
    this.props.blog.posts.forEach(postData => {
      renderedPosts.push(<BlogPostPreview key={postData._id} blogPost={postData} />)
    })
    return renderedPosts
  }

  render () {
    return (
      <div id='blogScrollableTarget' className='page'>
        <div id='blog' className='centerMargins'>
          <InfiniteScroll
            next={this.getMoreRecentPosts()}
            hasMore={!this.props.blog.gotAllRecentPosts}
            loader={<h1>Loading Posts...</h1>}
            scrollableTarget='blogScrollableTarget'
          >
            {this.renderPosts()}
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ blog, auth }) => ({ blog, auth })

const mapDispatchToProps = dispatch => ({
  getDraftPosts: () => dispatch(getDraftPosts()),
  getStickyPosts: () => dispatch(getStickyPosts()),
  getRecentPosts: (at, count) => dispatch(getRecentPosts(at, count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
