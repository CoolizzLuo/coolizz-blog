const TOKEN_NAME = 'token'


const setAuthToken = (token) => localStorage.setItem(TOKEN_NAME, token)
const getAuthToken = () => localStorage.getItem(TOKEN_NAME)
const clearAuthToken = () => localStorage.removeItem(TOKEN_NAME)

export { setAuthToken, getAuthToken, clearAuthToken }