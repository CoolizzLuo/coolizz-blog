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
`

const NavbarList = styled.div`
  display: flex;
`

const Nav = styled(NavLink, {
  activeClassName: 'active',
})`
  display: flex;
  font-weight: 100;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 2px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: #999;
  text-decoration: none;

  & + & {
    margin-left: 6px;
  }
  &.active {
    color: #000;
  }
  &:hover {
    color: #444;
    background: #ddd;
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
      <NavbarList>
        <Nav exact to="/">Home</Nav>
        <Nav to="/new_post">Post</Nav>
        <Nav to="/about">About me</Nav>
        {!user && <Nav to="/login">login</Nav>}
        {user && <Nav to="/" onClick={handleLogout}>log out</Nav>}
      </NavbarList>
    </HeaderContainer>
  )
}

export default withRouter(Header)