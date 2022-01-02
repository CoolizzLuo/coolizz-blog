import { getAuthToken } from './utils'


const BASE_URL = 'https://student-json-api.lidemy.me'

const getUsers = async () => {
  return fetch(`${BASE_URL}/users`)
    .then(res => res.json())
}

const getPosts = async () => {
  return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`)
    .then(res => res.json())
}

const getPostById = async (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}`)
    .then(res => res.json())
}

const removePostById = async (id) => {
  return fetch(`${BASE_URL}/posts/${id}`, { method: 'DELETE' })
    .then(res => res.json())
}

// const singUp = async (nickname, username, password) => {
//   return fetch(`${BASE_URL}/login`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       nickname,
//       username,
//       password
//     })
//   })
//     .then(res => res.json())
// }

const getMe = async () => {
  const token = getAuthToken()

  return fetch(`${BASE_URL}/me`, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
}

export {
  getUsers,
  getPosts,
  getPostById,
  removePostById,
  getMe
}
