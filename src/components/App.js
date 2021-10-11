import { useState, useEffect } from 'react'
import styled from 'styled-component'
import Router from './Router'
import Header from './Header'
import { AuthContext } from '../context'
import { getMe } from '../WebAPI'
import { getAuthToken } from '../utils'


const Root = styled.div`
  padding-top: 64px;
`

export default function App() {
  const [user, setUser] = useState(null)
  const token = getAuthToken()

  useEffect(() => {
    getMe().then((res) => {
      if (res.ok !== 1) return
      setUser(res.data)
    })
  }, [token])



  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Root>
        <Router>
          <Header/>
        </Router>
      </Root>
    </AuthContext.Provider>
  )
}