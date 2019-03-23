import apiNetworking from '../../Core/utils/apiNetworking'

export const ACTION_GET_POSTS = 'ACTION_GET_POSTS'
export const ACTION_GET_POSTS_FAILED = 'ACTION_GET_POSTS_FAILED'
export const ACTION_CLEAR_POSTS = 'ACTION_CLEAR_POSTS'
export const ACTION_NEW_POST = 'ACTION_NEW_POST'
export const ACTION_EDIT_POST = 'ACTION_EDIT_POST'
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST'
export const ACTION_GOT_ALL_RECENT_POSTS = 'ACTION_GOT_ALL_RECENT_POSTS'

export const getStickyPosts = () => {
  return async dispatch => {
    var err
    for (let attempts = 3; attempts > 0; attempts--) {
      try {
        const stickyPostsRes = await stickyPostsRequest()
        await dispatch({
          type: ACTION_GET_POSTS,
          payload: {
            posts: stickyPostsRes.data.data
          }
        })
        return
      } catch (e) {
        err = e
      }
    }
    throw err
  }
}

export const getDraftPosts = () => {
  return async dispatch => {
    var err
    for (let attempts = 3; attempts > 0; attempts--) {
      try {
        const draftPostsRes = await draftPostsRequest()
        await dispatch({
          type: ACTION_GET_POSTS,
          payload: {
            posts: draftPostsRes.data.data
          }
        })
        return
      } catch (e) {
        err = e
      }
    }
    throw err
  }
}

export const getRecentPosts = (at, count) => {
  return async dispatch => {
    var err
    for (let attempts = 3; attempts > 0; attempts--) {
      try {
        const recentPostsRes = await recentPostsRequest({
          at, count
        })
        await dispatch({
          type: ACTION_GET_POSTS,
          payload: {
            posts: recentPostsRes.data.data
          }
        })
        return
      } catch (e) {
        err = e
      }
    }
    throw err
  }
}

export const getMoreRecentPosts = () => {
  return async (dispatch, getState) => {
    var err
    for (let attempts = 3; attempts > 0; attempts--) {
      try {
        const recentPostsRes = await recentPostsRequest({
          at: this.props.blog.posts.filter(post => { return !post.sticky && !post.draft }).length, count: 20
        })
        await dispatch({
          type: ACTION_GET_POSTS,
          payload: {
            posts: recentPostsRes.data.data
          }
        })
        return
      } catch (e) {
        err = e
      }
    }
    throw err
  }
}

export const deletePost = (postId) => {
  return async dispatch => {
    await deletePostRequest(postId)
    return async dispatch => {
      return dispatch({
        type: ACTION_DELETE_POST,
        payload: {
          postId
        }
      })
    }
  }
}

export const clear = () => {
  return async dispatch => {
    return dispatch({
      type: ACTION_CLEAR_POSTS
    })
  }
}

export const editPost = (postId, title, body, sticky, draft) => {
  return async dispatch => {
    await editPostRequest(postId, {
      title,
      body,
      sticky,
      draft
    })
    await dispatch({
      type: ACTION_DELETE_POST,
      payload: {
        postId
      }
    })
    return dispatch({
      type: ACTION_NEW_POST,
      payload: {
        post: {
          _id: postId,
          title,
          body,
          sticky,
          draft
        }
      }
    })
  }
}

export const newPost = (title, body, sticky, draft) => {
  return async dispatch => {
    const postId = await newPostRequest({
      title,
      body,
      sticky,
      draft
    })
    await dispatch({
      type: ACTION_NEW_POST,
      payload: {
        post: {
          _id: postId,
          title,
          body,
          sticky,
          draft
        }
      }
    })

    return postId
  }
}

export const getBlogPost = (postId) => {
  return async dispatch => {
    return blogPostRequest(postId)
  }
}

function stickyPostsRequest () {
  return apiNetworking.get('api/blog/posts/sticky')
}

function recentPostsRequest (params) {
  return apiNetworking.get('api/blog/posts/recent', params)
}

function draftPostsRequest () {
  return apiNetworking.get('api/blog/posts/drafts')
}

function newPostRequest (params) {
  return apiNetworking.post('api/blog/post/new', params)
}

function editPostRequest (postId, params) {
  return apiNetworking.post(`api/blog/post/${postId}/edit`, params)
}

function deletePostRequest (postId) {
  return apiNetworking.delete(`api/blog/post/${postId}`)
}

function blogPostRequest (postId) {
  return apiNetworking.get(`api/blog/post/${postId}`)
}
