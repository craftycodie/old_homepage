import { ACTION_RETRIEVE_USER, ACTION_CLEAR_USER } from '../../User/actions/userActions'

export const STATE_LOGGED_OUT = 'LOGGED_OUT'
export const STATE_LOGGED_IN = 'LOGGED_IN'

const initialState = {
  gotUser: false,
  currentUser: null,
  loginState: STATE_LOGGED_OUT
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_RETRIEVE_USER:
      return {
        ...state,
        gotUser: true,
        currentUser: payload.user,
        loginState: STATE_LOGGED_IN
      }

    case ACTION_CLEAR_USER:
      return {
        ...state,
        gotUser: false,
        currentUser: null,
        loginState: STATE_LOGGED_OUT
      }

    default:
      return state
  }
}

export default reducer
