import { useState, useLayoutEffect } from 'react'

import styled from '@emotion/styled'
import { HashRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import RouteSwitch from './components/RouteSwitch'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthContext } from './context'
import { getMe } from './WebAPI'
import { getAuthToken } from './utils'


const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 768px;
`

const Container = styled.div`
  text-align: center;
  height: calc(100vh - 204px);
  overflow: auto;
  margin: 24px 0;
`


const App = () => {
  const [user, setUser] = useState(null)
  const token = getAuthToken()

  useLayoutEffect(() => {
    getMe().then((res) => {
      if (res.ok !== 1) return
      setUser(res.data)
    })
  }, [token])


  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
      <Layout>
        <Router>
          <Header />
          <Container>
            <RouteSwitch />
          </Container>
          <Footer />
        </Router>
      </Layout>
    </AuthContext.Provider>
  )
}

export default App
