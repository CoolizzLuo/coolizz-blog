import _axios from 'axios'
import { getAuthToken } from '../utils'

const axios = baseURL => {
  const instance = _axios.create({
    baseURL: baseURL || 'https://student-json-api.lidemy.me/',
    timeout: 1000
  })

  instance.interceptors.request.use(
    (config) => {
      const token = getAuthToken()
      config.headers['Authorization'] = 'Bearer ' + token
      // Do something before request is sent
      return config
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  return instance
}

export { axios }

export default axios()
