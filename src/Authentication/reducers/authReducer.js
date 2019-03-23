import { ACTION_LOGIN, ACTION_LOGOUT } from '../actions/authActions'

const initialState = {
  authenticated: false,
  token: null
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_LOGIN:
      return {
        ...state,
        authenticated: true,
        token: payload.token
      }

    case ACTION_LOGOUT:
      return {
        ...state,
        authenticated: false,
        token: null
      }

    default:
      return state
  }
}

export default authReducer
