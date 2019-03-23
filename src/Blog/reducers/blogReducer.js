import { ACTION_CLEAR_POSTS, ACTION_DELETE_POST, ACTION_GET_POSTS, ACTION_NEW_POST, ACTION_GOT_ALL_RECENT_POSTS } from '../actions/blogActions'
import { merge as mergeArrays } from '../../Core/utils/arrayUtils'

const initialState = {
  gotDraftPosts: false,
  gotStickyPosts: false,
  gotAllRecentPosts: false,
  recentPostsCount: 0,
  posts: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_CLEAR_POSTS:
      return {
        ...initialState
      }

    case ACTION_DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => {
          return post._id !== payload.postId
        })
      }

    case ACTION_GET_POSTS:
      return {
        ...state,
        posts: mergeArrays(state.posts, payload.posts)
      }

    case ACTION_GOT_ALL_RECENT_POSTS:
      return {
        ...state,
        gotAllRecentPosts: true
      }

    case ACTION_NEW_POST:
      return {
        ...state,
        posts: state.posts.concat([payload.post])
      }

    default:
      return state
  }
}

export default reducer
