import { getAuthToken } from './utils'

const BASE_URL = 'https://student-json-api.lidemy.me'

export const getPosts = async () => {
  return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`)
    .then(res => res.json())
}

export const getPostById = async (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`)
    .then(res => res.json())
}

export const login = async (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(res => res.json())
}

export const getMe = async () => {
  const token = getAuthToken()

  return fetch(`${BASE_URL}/me`, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
}
