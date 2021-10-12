import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Router from './Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
          />
        <Router/>
      </Root>
    </AuthContext.Provider>
  )
}