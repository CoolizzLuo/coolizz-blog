import decode from 'jwt-decode'

const JWT = 'store_token_id'

const setToken = (token) => {
  localStorage.setItem(JWT, token)
}

const getToken = () => {
  return localStorage.getItem(JWT)
}
