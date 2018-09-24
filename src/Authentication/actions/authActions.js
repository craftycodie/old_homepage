import { logout as userLogout } from '../../User/actions/userActions'
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
    await userLogout()
    await clearBlog()
    return dispatch({
      type: ACTION_LOGOUT
    })
  }
}

export const login = (username, password) => {
  return async (dispatch, getState) => {
    try {
        const res = await loginRequest({
            username,
            password,
        })
        const token = response.data.token
        await dispatch(loggedIn(token))
    } catch(error) {
      alert(error.message)
    }
  }
}

function loginRequest (params) {
  return apiNetworking.post('api/auth/login', params)
}
