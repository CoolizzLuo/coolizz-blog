const TOKEN_NAME = process.env.REACT_APP_TOKEN_NAME


const setAuthToken = (token) => localStorage.setItem(TOKEN_NAME, token)
const getAuthToken = () => localStorage.getItem(TOKEN_NAME)
const clearAuthToken = () => localStorage.removeItem(TOKEN_NAME)

const getFormattedTime = (time) => new Date(time).toLocaleString('zh-TW', { hour12: false })
const getUserFromList = (userList, userId) => userList.find((user) => user.id === userId)

export { setAuthToken, getAuthToken, clearAuthToken, getFormattedTime, getUserFromList }
