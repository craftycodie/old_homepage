import axios from 'axios'
import DeviceInfo from 'react-native-device-info'

import { logout } from '../../Authentication/actions/authActions'

import { Token } from './messaging'
import showError from '../utils/showError'
import store from '../store'

const apiNetworking = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: 'application/json'
  }
})

/**
 * We want to logout users if their token expires.
 */
apiNetworking.interceptors.request.use(
  request => {
      console.log('WEB REQUEST')
      console.log(request)

    if (store.getState().auth.token) {
      request.headers['Authorization'] = 'JWT ' + store.getState().auth.token
    }

    return request
  }
)

/**
 * We want to logout users if their token expires.
 */
apiNetworking.interceptors.response.use(
  response => {

      console.log('WEB RESPONSE')
      console.log(response)

    return response
  },
  error => {
    const response = error.response

      console.log('WEB ERROR')
      console.log(response)

    if (response && response.status !== 401) {
      if (response.status === 500) {
        return Promise.reject(new Error('Unexpected server error, try again later.'))
      } else if (response.data !== undefined && response.data.message !== undefined) {
        return Promise.reject(new Error(response.data.message))
      } else {
        return Promise.reject(new Error(error))
      }
    } else {
      if (response.status === 401) {
        return Promise.reject(new Error(response.data.message))
      }

      store.dispatch(logout())
      alert('Your session has expired. Please login again.')

      return Promise.reject(new Error(error))
    }
  }
)

export default apiNetworking
