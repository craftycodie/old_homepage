import { clear as clearBlog } from '../../Blog/actions/blogActions'
import apiNetworking from '../../Core/utils/apiNetworking'

export const ACTION_LOGIN = 'ACTION_LOGIN'
export const ACTION_LOGOUT = 'ACTION_LOGOUT'

export const loggedIn = (token, user) => {
  return dispatch => {
    return dispatch({
      type: ACTION_LOGIN,
      payload: {
        token: token
      }
    })
  }
}

export const logout = () => {
  return async dispatch => {
    await clearBlog()
    return dispatch({
      type: ACTION_LOGOUT
    })
  }
}

export const login = (username, password) => {
  return async (dispatch, getState) => {
    const res = await loginRequest({
      username,
      password
    })
    const token = res.data.token
    await dispatch(loggedIn(token))
  }
}

function loginRequest (params) {
  return apiNetworking.post('api/auth/login', params)
}
