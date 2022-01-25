const BASE_URL = process.env.REACT_APP_BASE_URL
const SET_DEFAULT_OPTION = () => {
  return {
    headers: {
      'content-type': 'application/json'
    },
  }
}

const login = async (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    ...SET_DEFAULT_OPTION(),
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(res => res.json())
}

const singUp = async (nickname, username, password) => {
  return fetch(`${BASE_URL}/register`, {
    ...SET_DEFAULT_OPTION(),
    method: 'POST',
    body: JSON.stringify({
      nickname,
      username,
      password
    })
  })
    .then(res => res.json())
}

const getMe = async () => {
  return fetch(`${BASE_URL}/me`, { ...SET_DEFAULT_OPTION() })
    .then(res => res.json())
}

export {
  login,
  singUp,
  getMe
}
