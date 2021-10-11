import { useState, useContext } from 'react'
import styled from 'styled-components'
import { getMe, login } from '../../WebAPI'
import { setAuthToken } from '../../utils'
import { AuthContext } from '../../context'

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 20px;
`

export default function LoginPage({ history }) {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    setErrorMsg('')
    e.preventDefault()

    login(username, password).then(res => {
      if (res.ok === 0) return setErrorMsg(res.message)

      setAuthToken(res.token)

      getMe().then(res => {
        if (res.ok !== 1) {
          setAuthToken('')
          return setErrorMsg(res.message)
        }
        setUser(res.data)
        history.push('/')
      })
    })
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        username: <input value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        password: <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      </div>
      <button>登入</button>

      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </form>  
  )
}