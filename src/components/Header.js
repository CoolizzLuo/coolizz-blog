import { useContext } from 'react'
import styled from "@emotion/styled/macro";
import { NavLink, Link, useLocation, withRouter } from 'react-router-dom'
import { AuthContext } from '../context'
import { setAuthToken } from '../utils'


const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Brand = styled(Link)`
  font-size: 2rem;
`

const NavbarList = styled.div`
  display: flex;
  height: 80px;
`

const Nav = styled(NavLink, {
  activeClassName: 'active',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 120px;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &.active {
    background: rgba(0, 0, 0, 0.1);
  }
`

const Header = ({ history }) => {
  const location = useLocation()
  const { pathname } = location
  const { user, setUser } = useContext(AuthContext)
  const handleLogout = () => {
    setAuthToken('')
    setUser(null)
    if (pathname !== '/') history.push('/')
  }

  return (
    <HeaderContainer>
      <Brand to="/">Enzo's Blog</Brand>
      <NavbarList>
        <Nav exact to="/">Home</Nav>
        <Nav to="/new_post">Post</Nav>
        <Nav to="/about">About me</Nav>
        { !user && <Nav to="/login">login</Nav> }
        { user && <Nav to="/" onClick={handleLogout}>log out</Nav> }
      </NavbarList>
    </HeaderContainer>
  )
}

export default withRouter(Header)